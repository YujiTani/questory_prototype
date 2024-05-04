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
import { sql } from "@/db/drizzle";
import { Badge } from "../ui/badge";
import { Cross2Icon } from "@radix-ui/react-icons";

type Props = {
  stage_id: number;
  question_id: number;
};

// TODO: 生のSQLをつかっているので、ORMを使うように修正する
// TODO: コードの可読性が悪いのでリファクタが必要
const QuestionHelper = ({ stage_id, question_id }: Props) => {
  const [details, setDetails] = useState("");
  const [other, setOther] = useState("");
  const [issueTypes, setIssueTypes] = useState<string[]>([]);

  const handleDetailsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setDetails(event.target.value);
  };

  const handleOtherChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setOther(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const feedback = await sql(
        `
      INSERT INTO user_feedbacks (details, stage_id, question_id, other)
      VALUES ($1, $2, $3, $4)
      RETURNING id
    `,
        [details, stage_id, question_id, other]
      );

      for (const issueType of issueTypes) {
        await sql(
          `INSERT INTO feedback_issues (feedback_id, issue_type)
          VALUES ($1, $2)
          `,
          [feedback[0].id, issueType]
        );
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIssueTypes([]);
      setDetails("");
      setOther("");
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
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">フィードバックフォーム</h3>
              <PopoverClose className="PopoverClose" aria-label="Close">
                <Cross2Icon />
              </PopoverClose>
            </div>
            <h4 className="mt-6 text-sm">
              項目にチェックし、送信してください。
              <Badge className="bg-red-500">必須</Badge>
            </h4>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="question_bug"
                value="question_bug"
                checked={issueTypes.includes("question_bug")}
                onCheckedChange={(checked) => {
                  return checked
                    ? setIssueTypes([...issueTypes, "question_bug"])
                    : setIssueTypes(
                        issueTypes.filter((value) => value !== "question_bug")
                      );
                }}
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
                checked={issueTypes.includes("answer_bug")}
                onCheckedChange={(checked) => {
                  return checked
                    ? setIssueTypes([...issueTypes, "answer_bug"])
                    : setIssueTypes(
                        issueTypes.filter((value) => value !== "answer_bug")
                      );
                }}
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
                id="explanation_bug"
                value="explanation_bug"
                checked={issueTypes.includes("explanation_bug")}
                onCheckedChange={(checked) => {
                  return checked
                    ? setIssueTypes([...issueTypes, "explanation_bug"])
                    : setIssueTypes(
                        issueTypes.filter(
                          (value) => value !== "explanation_bug"
                        )
                      );
                }}
              />
              <Label
                htmlFor="explanation_bug"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                解説がまちがっている
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="found_bugs"
                value="found_bugs"
                checked={issueTypes.includes("found_bugs")}
                onCheckedChange={(checked) => {
                  return checked
                    ? setIssueTypes([...issueTypes, "found_bugs"])
                    : setIssueTypes(
                        issueTypes.filter((value) => value !== "found_bugs")
                      );
                }}
              />
              <Label
                htmlFor="found_bugs"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                バグがある
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="operating_problem"
                value="operating_problem"
                checked={issueTypes.includes("operating_problem")}
                onCheckedChange={(checked) => {
                  return checked
                    ? setIssueTypes([...issueTypes, "operating_problem"])
                    : setIssueTypes(
                        issueTypes.filter(
                          (value) => value !== "operating_problem"
                        )
                      );
                }}
              />
              <Label
                htmlFor="operating_problem"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                操作に問題がある
              </Label>
            </div>
            <div className="mt-2">
              <h4 className="text-sm">詳細</h4>
              <Input
                id="details"
                className="h-8"
                value={details}
                onChange={handleDetailsChange}
              />
            </div>
            <div className="mt-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="other"
                  value="other"
                  checked={issueTypes.includes("other")}
                  onCheckedChange={(checked) => {
                    return checked
                      ? setIssueTypes([...issueTypes, "other"])
                      : setIssueTypes(
                          issueTypes.filter((value) => value !== "other")
                        );
                  }}
                />
                <Label
                  htmlFor="other"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  その他
                </Label>
              </div>
              <Input
                id="other"
                className="mt-1 h-8"
                value={other}
                onChange={handleOtherChange}
              />
            </div>
            <Input type="hidden" value={stage_id} name="stage_id" />
            <Input type="hidden" value={question_id} name="question_id" />
            <button
              type="submit"
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
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
