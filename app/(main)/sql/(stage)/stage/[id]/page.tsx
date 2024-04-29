"use client";

import { useReducer, useEffect, useMemo, useCallback } from "react";
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
import { unstable_batchedUpdates } from "react-dom";

export const runtime = "edge";

// TODO: エラーがキャッチできているか確認する
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
 * 6. 次の問題を表示する処理を作成する
 * 7. クリア判定を作成する
 * 8. エラー画面切り替えと、問題セットはuseEffect化する
 * 9. SEのON／OFF切り替えをユーザーができるようにする
 */
const InnerStagePage = () => {
  const { id: stageId } = useParams<{ id: string }>();
  const [state, dispatch] = useReducer(reducer, initialState);
  // 画面切り替え時に、確認を行う
  usePageTransitionGuard();

  // 初期化
  const init = useCallback(() => {
    dispatch({ type: "SET_QUESTION_COUNT", payload: 1 });
    dispatch({ type: "SET_QUESTION", payload: null });

    const questions = questionsList.find(
      ({ id }) => id === Number(stageId)
    )?.questions;

    if (!questions) {
      dispatch({ type: "SET_ERROR", payload: "No questions found" });
      return;
    }

    dispatch({ type: "SET_QUESTIONS", payload: questions });
    dispatch({ type: "SET_QUESTION", payload: questions[0] });
  }, [stageId, dispatch]);

  // 設定をリセット
  const reset = useCallback(() => {
    dispatch({ type: "SET_SNAP", payload: "148px" });
    dispatch({ type: "SET_STAGE_STATE", payload: "prepare" });
    dispatch({ type: "SET_SELECTED_ANSWER", payload: "" });
    dispatch({ type: "SET_ERROR", payload: null });
  }, [dispatch]);

  // 新しい問題をセット
  const setQuestions = useCallback(() => {
    if (state.currentQuestion === null) {
      init();
    }

    reset();
    dispatch({
      type: "SET_QUESTION",
      payload: state.questions![state.questionCount],
    });
  }, [
    state.questionCount,
    init,
    reset,
    state.questions,
    state.currentQuestion,
  ]);

  useEffect(() => {
    if (stageId) {
      setQuestions();
    }
  }, [stageId, state.questionCount, setQuestions]);

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

  const handleSubmit = async (isCorrect: boolean) => {
    dispatch({ type: "SET_STAGE_STATE", payload: "result" });

    const sound = isCorrect ? "success2" : "failure2";
    const audio = new Audio(`/se/${sound}.mp3`);
    await audio.play();

    if (!state.currentQuestion) {
      dispatch({ type: "SET_ERROR", payload: "No question found" });
      return;
    }

    if (!isCorrect) {
      const newQuestion = {
        ...state.currentQuestion,
        failure: state.currentQuestion.failure + 1,
      };
      dispatch({ type: "SET_FAILURE_QUESTION", payload: newQuestion });
    }
  };

  const next = () => {
    if (state.failureQuestion) {
      dispatch({ type: "ADD_QUESTION", payload: state.failureQuestion });
    }

    dispatch({ type: "INCREMENT_QUESTION_COUNT" });
    setQuestions();
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
          index={state.questionCount}
          count={state.questions.length}
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
          state={state.stageState}
          next={next}
        />
      </div>
    </>
  );
};

export default StagePage;
