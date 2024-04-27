import { Separator } from "@radix-ui/react-separator";

type Props = {
  target: string;
  title: string;
  index: number;
  count: number;
};

const QuestionInfo = ({ target, title, index, count }: Props) => {
  return (
    <div className="mt-4 p-3 border-2 border-slate-300 rounded-md flex flex-col gap-3 border-b-[4px] border-b-slate-300 tracking-wide">
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
