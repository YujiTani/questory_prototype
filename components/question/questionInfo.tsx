import { Separator } from "@radix-ui/react-separator";

type Props = {
  target: string;
  title: string;
  index: number;
  count: number;
};

const QuestionInfo = ({ target, title, index, count }: Props) => {
  return (
    <div className="mt-4 p-3 border-2 border-slate-400 rounded-md flex flex-col gap-3">
      <h1 className="text-sm font-bold">{target}</h1>
      <Separator orientation="horizontal" />
      <p className="text-pretty">{title}</p>
      <Separator orientation="horizontal" />
      <div className="flex justify-end">
        <span className="text-xs">
          {index} / {count}
        </span>
      </div>
    </div>
  );
};

export default QuestionInfo;
