"use client";

import { useReducer, useEffect } from "react";
import { useParams } from "next/navigation";
import MultipleChoice from "@/components/question/multipleChoice";
import QuestionDrawer from "@/components/question/questionDrawer";
import QuestionInfo from "@/components/question/questionInfo";
import { stages as stageData } from "@/data/stages";
import { questionsList } from "@/data/questions";
import { reducer, initialState } from "@/app/hooks/stageReducer";
import { usePageTransitionGuard } from "@/app/hooks/usePageTransitionGuard";

export const runtime = "edge";

/**
 * TODO:
 * 1. APIが出来たらFetch処理に変更する
 * 2. 解説テキストとDB部分を受け取れるようにする
 * 3. 回答部分のコンポーネントを作成する(sort型を作成する)
 * 4. questionに解答コンポーネントはどれを使うかcodeを渡す
 * 5. データ型を整えながら、１問目のデータ取得、表示処理を作る
 * 6. reducerの処理を理解する
 * 7. answerの作り方が強引なのでなにか方法を考える
 */
const StagePage = () => {
  const { id: stageId } = useParams<{ id: string }>();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (stageId === undefined) {
      return;
    }

    const questions = questionsList.find(
      ({ id }) => id === Number(stageId)
    )?.questions;
    if (questions === undefined) {
      return;
    }

    dispatch({ type: "SET_TOTAL_COUNT", payload: questions.length });

    const { questCount } = state;
    const currentQuestion = questions.find(({ id }) => id === questCount);
    if (currentQuestion) {
      dispatch({ type: "SET_CURRENT_QUESTION", payload: currentQuestion });
    }
  }, []);

  // answer, falseAnswers
  const answer = state.currentQuestion?.answer ?? "";
  const falseAnswers =
    state.currentQuestion?.type === "sorting"
      ? []
      : state.currentQuestion?.falseAnswers;

  const answers = [answer, ...(falseAnswers ?? [])];

  usePageTransitionGuard();

  return (
    <>
      <div className="scroll-smooth">
        <QuestionInfo
          target={
            stageData.find(({ id }) => id === Number(stageId))?.target ?? ""
          }
          title={state.currentQuestion?.question ?? ""}
          index={state.questCount}
          count={state.totalCount}
        />
        <main className="mt-14">
          {state.currentQuestion?.type === "select" ? (
            <MultipleChoice answers={answers} />
          ) : (
            <div className="text-center">
              <p>Coming Soon</p>
              <p>鋭意開発中…💦</p>
            </div>
          )}
        </main>
        <QuestionDrawer snap={state.snap} isOpen={state.isOpen} />
      </div>
    </>
  );
};

export default StagePage;
