import { Button } from "@/components/ui/button";

type Props = {
  answers: {
    id: string;
    text: string;
  }[];
};

const MultipleChoice = ({ answers }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      {answers.length > 0 ? (
        answers.map((answer) => <Button key={answer.id}>{answer.text}</Button>)
      ) : (
        <p>回答がありません。</p>
      )}
    </div>
  );
};

export default MultipleChoice;
