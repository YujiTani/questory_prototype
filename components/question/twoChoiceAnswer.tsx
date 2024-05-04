import { useEffect, useState } from "react";
import { StageState } from "@/app/hooks/stageReducer";
import { Button } from "@/components/common/button";

type Props = {
  answer: string;
  falseAnswer: string;
  handleClick: (answer: string) => void;
  selectedAnswer: string | null;
  state: StageState;
};

const TwoChoiceAnswer = ({
  answer,
  falseAnswer,
  handleClick,
  selectedAnswer,
  state,
}: Props) => {
  const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);

  useEffect(() => {
    const answers = [answer, falseAnswer];

    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answers[i], answers[j]] = [answers[j], answers[i]];
    }
    setShuffledAnswers(answers);
  }, [answer, falseAnswer]);

  return (
    <div className="flex flex-col gap-4 mb-40">
      {shuffledAnswers.map((answer) => (
        <Button
          key={answer}
          onClick={() => handleClick(answer)}
          active={selectedAnswer === answer}
          disabled={state === "result"}
        >
          {answer}
        </Button>
      ))}
    </div>
  );
};

export default TwoChoiceAnswer;
