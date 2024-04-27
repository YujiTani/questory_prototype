import { Button } from "@/components/common/button";

type Props = {
  answers: string[];
  handleClick: (answer: string) => void;
};

const MultipleChoice = ({ answers, handleClick }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      {answers.length > 0 ? (
        answers.map((answer) => (
          <Button key={answer} onClick={() => handleClick(answer)}>
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
