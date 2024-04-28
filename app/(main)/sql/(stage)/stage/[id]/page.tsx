"use client";

import { useReducer, useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import MultipleChoice from "@/components/question/multipleChoice";
import QuestionDrawer from "@/components/question/questionDrawer";
import QuestionInfo from "@/components/question/questionInfo";
import { stages as stageData } from "@/data/stages";
import { questionsList } from "@/data/questions";
import { reducer, initialState } from "@/app/hooks/stageReducer";
import { usePageTransitionGuard } from "@/app/hooks/usePageTransitionGuard";
import SuspenseBoundary from "@/components/common/suspenseBoundary";
import { Skeleton } from "@/components/common/skeleton";

export const runtime = "edge";

const StagePage = () => {
  return (
    <SuspenseBoundary>
      <InnerStagePage />
    </SuspenseBoundary>
  );
};

/**
 * TODO:
 * 1. APIが出来たらFetch処理に変更する
 * 2. 解説テキストとDB部分を受け取れるようにする
 * 3. 回答部分のコンポーネントを作成する(あとはsort型を作成する)
 * 4. questionに解答コンポーネントはどれを使うかcodeを渡す
 * 6. reducerの処理を理解する
 * 7. answerの作る部分を関数に切り出す
 * 8. 解答部分の処理を作成する
 */
const InnerStagePage = () => {
  const { id: stageId } = useParams<{ id: string }>();
  const [state, dispatch] = useReducer(reducer, initialState);
  // 画面切り替え時に、確認を行う
  usePageTransitionGuard();

  useEffect(() => {
    if (stageId) {
      fetchQuestions();
    }
  }, [stageId]);

  const fetchQuestions = () => {
    const questions = questionsList.find(
      ({ id }) => id === Number(stageId)
    )?.questions;
    if (questions) {
      dispatch({ type: "SET_TOTAL_COUNT", payload: questions.length });
      const currentQuestion = questions.find(
        ({ id }) => id === state.questCount
      );
      if (currentQuestion) {
        dispatch({ type: "SET_QUESTION", payload: currentQuestion });
      }
    }
  };

  const answers = useMemo(() => {
    const answer = state.currentQuestion?.answer ?? "";
    const falseAnswers =
      state.currentQuestion?.type === "sorting"
        ? []
        : state.currentQuestion?.falseAnswers;
    return [answer, ...(falseAnswers ?? [])];
  }, [state.currentQuestion]);

  // エラーが発生した場合の表示
  if (state.isError) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-2xl font-bold">{state.isError}</p>
      </div>
    );
  }

  // TODO: 問題タイプが増えた場合、ユニオン型にする
  const isSelectType = state.currentQuestion?.type === "select";

  // 解答で使用するコンポーネントを取得
  // TODO: 数が増えた場合、別ファイルに切り出す
  const AnserField = isSelectType ? (
    <MultipleChoice
      answers={answers}
      handleClick={(answer) =>
        dispatch({ type: "SET_SELECTED_ANSWER", payload: answer })
      }
      selectedAnswer={state.selectedAnswer}
    />
  ) : (
    <div className="text-center">
      <h2 className="text-2xl font-bold">Coming Soon</h2>
      <p>鋭意開発中…🔧</p>
    </div>
  );

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
          {state.currentQuestion ? (
            AnserField
          ) : (
            <div className="text-center">
              <Skeleton className="w-[full] h-[300px] bg-gray-200" />
            </div>
          )}
        </main>
        <QuestionDrawer
          snap={state.snap}
          setSnap={(snap) => dispatch({ type: "SET_SNAP", payload: snap })}
          isOpen={state.isOpen}
          answer={state.currentQuestion?.answer}
          selectedAnswer={state.selectedAnswer}
          handleSubmit={(payload) =>
            dispatch({ type: "CORRECT_ANSWER", payload })
          }
          isCorrect={state.isCorrect}
        />
      </div>
    </>
  );
};

export default StagePage;
