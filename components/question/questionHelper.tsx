import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import ImageCenter from "../object/imageCenter";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

type Props = {
  stage_id: string;
  question_id: string;
};

const QuestionHelper = ({ stage_id, question_id }: Props) => {
  const [details, setDetails] = useState("");
  const [issueTypes, setIssueTypes] = useState<string[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;
    setIssueTypes((prev) => {
      if (checked) {
        return [...prev, value];
      } else {
        return prev.filter((type) => type !== value);
      }
    });
  };

  const handleDetailsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDetails(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      // feedbacksテーブルにレコードを挿入し、feedback_idを取得
      const feedbackResponse = await fetch("/api/feedbacks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          details: details,
          stage_id: stage_id,
          question_id: question_id,
        }),
      });
      const feedbackData = await feedbackResponse.json();
      const feedbackId = feedbackData.id;

      // feedback_issuesテーブルにレコードを挿入
      for (const issueType of issueTypes) {
        await fetch("/api/feedback_issues", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            feedback_id: feedbackId,
            issue_type: issueType,
          }),
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
        <form
          onSubmit={handleSubmit}
          className="grid gap-4 bg-slate-100 p-4 rounded-md"
        >
          <div className="space-y-2">
            <h3 className="text-lg font-bold">フィードバックフォーム</h3>
            <p className="text-sm text-muted-foreground">項目にチェック</p>
          </div>
          <div className="mt-6 flex flex-col gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="question_bug"
                value="question_bug"
                onChange={handleCheckboxChange}
              />
              <Label
                htmlFor="question_bug"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                問題がまちがっている
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="answer_bug"
                value="answer_bug"
                onChange={handleCheckboxChange}
              />
              <Label
                htmlFor="answer_bug"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                解答がまちがっている
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="Explanation_bug"
                value="Explanation_bug"
                onChange={handleCheckboxChange}
              />
              <Label
                htmlFor="Explanation_bug"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                解説がまちがっている
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="bug" value="bug" onChange={handleCheckboxChange} />
              <Label
                htmlFor="bug"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                バグ報告(詳細もあると助かります)
              </Label>
            </div>
            <div className="mt-6">
              <h3 className="text-md font-medium">詳細:</h3>
              <Input
                id="details"
                placeholder="詳細"
                className="h-8"
                value={details}
                onChange={handleDetailsChange}
              />
              <Input type="hidden" value={stage_id} name="stage_id" />
              <Input type="hidden" value={question_id} name="question_id" />
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
