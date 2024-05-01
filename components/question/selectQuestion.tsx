import { useReducer } from "react";
import { Skeleton } from "../common/skeleton";
import QuestionDrawer from "./questionDrawer";
import QuestionInfo from "./questionInfo";
import SelectAnswer from "./selectAnswer";
import { initialState, reducer } from "@/app/hooks/stageReducer";
import { useParams } from "next/navigation";
import { stages as stageData } from "@/data/stages";

type Props = {
  next: () => void;
};

const SelectQuestion = ({ next }: Props) => {
  const { id: stageId } = useParams<{ id: string }>();
  const [state, dispatch] = useReducer(reducer, initialState);

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

  return (
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
  );
};

export default SelectQuestion;
