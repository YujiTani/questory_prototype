import { Button } from "@/components/common/button";

type Props = {
  answers: string[];
  handleClick: (answer: string) => void;
  selectedAnswer: string | null;
};

const MultipleChoice = ({ answers, handleClick, selectedAnswer }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      {answers.length > 0 ? (
        answers.map((answer) => (
          <Button
            key={answer}
            onClick={() => handleClick(answer)}
            active={selectedAnswer === answer}
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

export default MultipleChoice;
