"use client";

import { useReducer, useEffect, useCallback } from "react";
import { useParams } from "next/navigation";
import { questionsList } from "@/data/questions";
import { reducer, initialState } from "@/app/hooks/stageReducer";
import { usePageTransitionGuard } from "@/app/hooks/usePageTransitionGuard";
import SuspenseBoundary from "@/components/common/suspenseBoundary";
import {
  useAnswerForSelectQuestion,
  useAnswerForBuildQuestion,
} from "@/app/hooks/useAnswers";
import SelectQuestion from "@/components/question/selectQuestion";
import QuestionDrawer from "@/components/question/questionDrawer";
import { Skeleton } from "@/components/common/skeleton";
import QuestionInfo from "@/components/question/questionInfo";
import BuildAnswer from "@/components/question/buildAnswer";
import SelectAnswer from "@/components/question/selectAnswer";
import { stages as stageData } from "@/data/stages";
import ClearScreen from "@/components/question/clear";

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
 * 5. クリア判定を作成する
 * 6. エラー画面切り替えと、問題セットはuseEffect化する
 * 7. SEのON／OFF切り替えをユーザーができるようにする
 * 8. 解答が長い時、ボタンがダサくなるのを修正する
 * 9. error入力内容がただしく保存されていない
 * 10. 音でるように修正する
 * 11. 問題を10問ずつくらいで、分割する3ステージ目は混ぜ混ぜにする
 * 12. クリア判定の修正(1問残してクリアになる)
 */
const InnerStagePage = () => {
  const { id: stageId } = useParams<{ id: string }>();
  const [state, dispatch] = useReducer(reducer, initialState);
  const answerForSelectQuestion = useAnswerForSelectQuestion;
  const answerForBuildQuestion = useAnswerForBuildQuestion;
  const roopLimit = 3;

  // 画面切り替え時に、確認を行う
  usePageTransitionGuard();

  // 初期化
  const init = useCallback(() => {
    dispatch({ type: "SET_QUESTION_COUNT", payload: 1 });
    dispatch({ type: "SET_QUESTION", payload: null });

    // テストが面倒なのでslice
    const questions = questionsList
      .find(({ id }) => id === Number(stageId))
      ?.questions.slice();

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
    dispatch({ type: "SET_FAILURE_QUESTION", payload: null });
    dispatch({ type: "SET_IS_CORRECT_ANSWER", payload: false });
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

  // 解答を取得
  const getAnswers = useCallback(() => {
    switch (state.currentQuestion?.type) {
      case "select":
        return answerForSelectQuestion(state.currentQuestion);
      case "build":
        return answerForBuildQuestion(state.currentQuestion);
      default:
        return [];
    }
  }, [state.currentQuestion, answerForSelectQuestion, answerForBuildQuestion]);

  useEffect(() => {
    const newAnswers = getAnswers();
    dispatch({ type: "SET_ANSWERS", payload: newAnswers });
  }, [state.currentQuestion, getAnswers, dispatch]);

  // エラーが発生した場合の表示
  if (state.isError) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-2xl font-bold">{state.isError}</p>
      </div>
    );
  }

  const handleSelectedAnswer = (answer: string) => {
    dispatch({ type: "SET_STAGE_STATE", payload: "selected" });
    dispatch({ type: "SET_SELECTED_ANSWER", payload: answer });
  };

  const handleSubmit = async (isCorrect: boolean) => {
    dispatch({ type: "SET_STAGE_STATE", payload: "result" });
    dispatch({ type: "SET_IS_CORRECT_ANSWER", payload: isCorrect });

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
    if (state.questionCount >= state.questions.length - 1) {
      dispatch({ type: "SHOW_CLEAR_SCREEN", payload: true });
      return;
    }

    if (state.failureQuestion) {
      dispatch({ type: "ADD_QUESTION", payload: state.failureQuestion });
    }

    dispatch({ type: "INCREMENT_QUESTION_COUNT" });
    setQuestions();
  };

  return (
    <>
      {state.showClearScreen ? (
        <div>
          <ClearScreen />
        </div>
      ) : state.currentQuestion?.type === "select" ? (
        <div>
          <div className="scroll-smooth">
            <QuestionInfo
              question={state.currentQuestion}
              target={
                stageData.find(({ id }) => id === Number(stageId))?.target ?? ""
              }
              title={state.currentQuestion?.question ?? ""}
              index={state.questionCount}
              count={state.questions.length}
              type={state.currentQuestion?.type}
            />
            <main className="mt-14 overflow-auto max-h-[calc(100vh-200px)]">
              {state.currentQuestion ? (
                <SelectAnswer
                  answers={state.answers}
                  handleClick={handleSelectedAnswer}
                  selectedAnswer={state.selectedAnswer}
                  state={state.stageState}
                />
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
              isCorrectAnswer={state.isCorrectAnswer}
            />
          </div>
        </div>
      ) : (
        <div>
          <div className="scroll-smooth">
            <QuestionInfo
              question={state.currentQuestion}
              target={
                stageData.find(({ id }) => id === Number(stageId))?.target ?? ""
              }
              title={state.currentQuestion?.question ?? ""}
              index={state.questionCount}
              count={state.questions.length}
              type={state.currentQuestion?.type}
            />
            <main className="mt-14 overflow-auto max-h-[calc(100vh-200px)]">
              {state.currentQuestion ? (
                <BuildAnswer
                  answers={state.answers}
                  handleClick={handleSelectedAnswer}
                  selectedAnswer={state.selectedAnswer}
                  state={state.stageState}
                />
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
              isCorrectAnswer={state.isCorrectAnswer}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default StagePage;
