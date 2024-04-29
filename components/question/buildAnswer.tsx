import { StageState } from "@/app/hooks/stageReducer";
import { TagButton } from "./tagButton";
import { useState } from "react";

type Props = {
  answers: string[];
  state: StageState;
};

const BuildAnswer = ({ answers, state }: Props) => {
  const [selectedAnswers, setSelectedAnswer] = useState<string[]>([]);

  const handleClicked = (answer: string) => {
    if (selectedAnswers?.includes(answer)) {
      return;
    }

    setSelectedAnswer([...selectedAnswers, answer + " "]);
  };

  const isSelected = (answer: string) => {
    return selectedAnswers?.includes(answer);
  };

  return (
    <div className="flex flex-wrap gap-2 mb-40">
      {selectedAnswers.length > 0 ? (
        <div className="w-full p-4 flex flex-wrap gap-4 rounded-md bg-gray-100 border-slate-400">
          {selectedAnswers.map((answer) => {
            return (
              <span
                key={answer}
                className="p-2 text-slate-600 border-slate-600 border-b-slate-800 rounded-md bg-white"
              >
                {answer}
              </span>
            );
          })}
        </div>
      ) : null}

      {answers.length > 0
        ? answers.map((answer) => (
            <TagButton
              key={answer}
              onClick={() => handleClicked(answer)}
              disabled={isSelected(answer)}
            >
              {answer}
            </TagButton>
          ))
        : null}
    </div>
  );
};

export default BuildAnswer;
