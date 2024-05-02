import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import ImageCenter from "../object/imageCenter";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const QuestionHelper = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <ImageCenter
          imageURL="/image/icon_help2.svg"
          alt="icon_help"
          size={8}
        />
      </PopoverTrigger>
      <PopoverContent className="PopoverContent w-80 border-slate-400 border-2 rounded-md shadow-xl">
        <form className="grid gap-4 bg-slate-100 p-4 rounded-md">
          <div className="space-y-2">
            <h3 className="text-lg font-bold">フィードバックフォーム</h3>
            <p className="text-sm text-muted-foreground">項目にチェック</p>
          </div>
          <div className="mt-6 flex flex-col gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="question_bug" />
              <Label
                htmlFor="question_bug"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                問題がまちがっている
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="answer_bug" />
              <Label
                htmlFor="answer_bug"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                解答がまちがっている
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="Explanation_bug" />
              <Label
                htmlFor="Explanation_bug"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                解説がまちがっている
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="bug" />
              <Label
                htmlFor="bug"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                バグ報告(詳細もあると助かります)
              </Label>
            </div>
            <div className="mt-6">
              <h3 className="text-md font-medium">詳細:</h3>
              <Input id="details" placeholder="詳細" className="h-8" />
            </div>
            <button
              type="submit"
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
            >
              送信
            </button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default QuestionHelper;
