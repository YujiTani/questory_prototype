import { StageState } from "@/app/hooks/stageReducer";
import { Button } from "@/components/common/button";

type Props = {
  answers: string[];
  handleClick: (answer: string) => void;
  selectedAnswer: string | null;
  state: StageState;
};

const SelectAnswer = ({
  answers,
  handleClick,
  selectedAnswer,
  state,
}: Props) => {
  return (
    <div className="flex flex-col gap-4 mb-40">
      {answers.length > 0 ? (
        answers.map((answer) => (
          <Button
            key={answer}
            onClick={() => handleClick(answer)}
            active={selectedAnswer === answer}
            disabled={state === "result"}
          >
            {answer}
          </Button>
        ))
      ) : (
        <p>回答がありません。</p>
      )}
    </div>
  );
};

export default SelectAnswer;
