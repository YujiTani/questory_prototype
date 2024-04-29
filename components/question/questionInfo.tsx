import { selectQuestion, sortQuestion } from "@/data/questions";
import { Separator } from "@radix-ui/react-separator";
import { Skeleton } from "../common/skeleton";

type Props = {
  question: selectQuestion | sortQuestion | null;
  target: string;
  title: string;
  index: number;
  count: number;
};

const QuestionInfo = ({ question, target, title, index, count }: Props) => {
  return (
    <div className="mt-4 p-3 border-2 border-slate-300 rounded-md flex flex-col gap-3 border-b-[4px] border-b-slate-300 tracking-wide">
      {question ? (
        <h1 className="text-sm font-bold">{target}</h1>
      ) : (
        <Skeleton className="w-3/5 h-[20px] bg-gray-200" />
      )}
      <Separator orientation="horizontal" />
      {question ? (
        <p className="text-pretty">{title}</p>
      ) : (
        <>
          <Skeleton className="w-full h-[20px] bg-gray-200" />
          <Skeleton className="w-full h-[20px] bg-gray-200" />
        </>
      )}
      <Separator orientation="horizontal" />
      <div className="flex justify-end">
        {question ? (
          <span className="flex items-center justify-center text-xs font-extrabold py-1 px-2 bg-pink-500 rounded-2xl">
            <span className="block text-center w-[24px] p-1 text-pink-400 bg-pink-100 rounded-full">
              {index}
            </span>
            <span className="mx-1 text-white">/</span>
            <span className="block text-center w-[24px] p-1 text-pink-700 bg-pink-100 rounded-full">
              {count}
            </span>
          </span>
        ) : (
          <Skeleton className="w-12 h-3 bg-gray-200" />
        )}
      </div>
    </div>
  );
};

export default QuestionInfo;
