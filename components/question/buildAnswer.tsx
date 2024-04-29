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

    setSelectedAnswer([...selectedAnswers, answer]);
  };

  const isSelected = (answer: string) => {
    return selectedAnswers?.includes(answer);
  };

  return (
    <div className="flex flex-wrap gap-6 mb-40">
      {selectedAnswers.length > 0 ? (
        <div className="w-full p-4 flex flex-wrap gap-1 rounded-md bg-gray-100 border-slate-400">
          {selectedAnswers.map((answer) => {
            return (
              <TagButton
                key={answer}
                className="p-2 text-slate-600 border-slate-200 border-b-[6px] rounded-md bg-white"
              >
                {answer}
              </TagButton>
            );
          })}
          <TagButton variant="danger" className="font-bold">
            ;
          </TagButton>
        </div>
      ) : null}

      {answers.length > 0 ? (
        <div className="flex flex-wrap gap-1">
          {answers.map((answer) => (
            <TagButton
              key={answer}
              onClick={() => handleClicked(answer)}
              disabled={isSelected(answer)}
            >
              {answer}
            </TagButton>
          ))}
        </div>
      ) : (
        <p>回答がありません。</p>
      )}
    </div>
  );
};

export default BuildAnswer;
