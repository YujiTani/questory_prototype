import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import ImageCenter from "../object/imageCenter";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Checkbox } from "@radix-ui/react-checkbox";

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
      <PopoverContent className="w-400px mx-auto my-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <form className="grid gap-4 bg-slate-100 p-4 rounded-md">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">フィードバック</h4>
            <p className="text-sm text-muted-foreground">
              以下の項目にチェックを入れて、詳細を入力してください。
            </p>
          </div>
          <div className="grid gap-2">
            <Checkbox id="terms" />
            <label htmlFor="terms">問題内容の不備</label>
            <Checkbox id="bug" />
            <label htmlFor="bug">バグ報告</label>
            <Checkbox id="good" />
            <label htmlFor="good">良いところ</label>
            <Checkbox id="improvement" />
            <label htmlFor="improvement">改善案</label>
            <Checkbox id="other" />
            <label htmlFor="other">その他</label>
            <Label htmlFor="details">詳細:</Label>
            <Input id="details" placeholder="詳細を入力" className="h-8" />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
