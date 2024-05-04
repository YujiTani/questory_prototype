import {
  Question,
  OneAnswerQuestion,
  MultipleAnswerQuestion,
  QuestionType,
} from "@/data/questions";
import { Separator } from "@radix-ui/react-separator";
import { Skeleton } from "../common/skeleton";
import { Badge } from "../ui/badge";
import { QuestionBadge } from "./questionBadge";

type Props = {
  question: Question | OneAnswerQuestion | MultipleAnswerQuestion | null;
  target: string;
  title: string;
  index: number;
  count: number;
  type: QuestionType | undefined;
};

const QuestionInfo = ({
  question,
  target,
  title,
  index,
  count,
  type,
}: Props) => {
  const typeText =
    type === "two_choice" ? "2択" : type === "select" ? "4択" : "組み立て";

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
      <div className="flex justify-end gap-2 text-xs">
        {question?.failure ? (
          <QuestionBadge className="flex text-red-500 font-bold bg-red-50">
            {"✕".repeat(question?.failure ?? 0).slice(0, 3)}
          </QuestionBadge>
        ) : null}
        <QuestionBadge className="min-16 bg-[#31ada1]">
          {typeText}
        </QuestionBadge>
        {question ? (
          <span className="w-20 flex items-center justify-center font-extrabold py-1 px-2 bg-[#51647a] rounded-2xl">
            <span className="flex items-center justify-center text-center w-[24px] py-1 px-2 text-pink-400 bg-white rounded-full">
              {index}
            </span>
            <span className="mx-2 text-white">/</span>
            <span className="flex items-center justify-center text-center w-[24px] py-1 px-2 text-[#453c5c] bg-white rounded-full">
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
