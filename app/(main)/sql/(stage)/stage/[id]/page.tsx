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
 * 4. 解答後テキストのアイコン画像を用意する
 * 5. エラーの解消をする
 * 6. 次の問題を表示する処理を作成する
 * 7.クリア判定を作成する
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

  const handleSelectedAnswer = (answer: string) => {
    dispatch({ type: "SET_STAGE_STATE", payload: "selected" });
    dispatch({ type: "SET_SELECTED_ANSWER", payload: answer });
  };

  const handleSubmit = (payload: boolean) => {
    // TODO: SEのON／OFF切り替えはユーザーができるようにする
    const sound = payload ? "success2" : "failure2";
    const audio = new Audio(`/se/${sound}.mp3`);
    audio.play();

    dispatch({ type: "CORRECT_ANSWER", payload });
    dispatch({ type: "SET_STAGE_STATE", payload: "result" });
  };

  // 解答で使用するコンポーネントを取得
  // TODO: 数が増えた場合、別ファイルに切り出す
  const AnserField = isSelectType ? (
    <MultipleChoice
      answers={answers}
      handleClick={handleSelectedAnswer}
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
          question={state.currentQuestion}
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
            <div className="mt-14 flex flex-col gap-4">
              <Skeleton className="w-[full] h-[40px] bg-gray-200" />
              <Skeleton className="w-[full] h-[40px] bg-gray-200" />
              <Skeleton className="w-[full] h-[40px] bg-gray-200" />
              <Skeleton className="w-[full] h-[40px] bg-gray-200" />
            </div>
          )}
        </main>
        <QuestionDrawer
          snap={state.snap}
          setSnap={(snap) => dispatch({ type: "SET_SNAP", payload: snap })}
          isOpen={state.isOpen}
          question={state.currentQuestion}
          selectedAnswer={state.selectedAnswer}
          handleSubmit={handleSubmit}
          isCorrect={state.isCorrect}
          state={state.stageState}
        />
      </div>
    </>
  );
};

export default StagePage;
