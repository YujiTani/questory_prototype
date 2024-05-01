"use client";

import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerPortal,
  DrawerTitle,
} from "@/components/ui/drawer";
import clsx from "clsx";
import { Button } from "@/components/common/button";
import { useEffect, useState } from "react";
import { StageState } from "@/app/hooks/stageReducer";
import { selectQuestion, buildQuestion } from "@/data/questions";

export const runtime = "edge";

type Props = {
  snap: number | string | null;
  setSnap: (snap: number | string | null) => void;
  isOpen: boolean;
  question: selectQuestion | buildQuestion | null;
  selectedAnswer: string | null;
  handleSubmit: (payload: boolean) => void;
  state: StageState;
  next: () => void;
  isCorrectAnswer: boolean;
};

const QuestionDrawer = ({
  snap,
  setSnap,
  isOpen,
  question,
  selectedAnswer,
  handleSubmit,
  state,
  next,
  isCorrectAnswer,
}: Props) => {
  const [submitText, setSubmitText] = useState("submit");
  const isPrepare = state === "prepare";
  const isResult = state === "result";
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    switch (true) {
      case isPrepare:
        setSubmitText("Please Select Answer");
        break;
      case isResult && isCorrect:
        setSubmitText("Next");
        break;
      case isResult && !isCorrect:
        setSubmitText("OK");
        break;
      default:
        setSubmitText("submit");
    }
  }, [isPrepare, isResult, isCorrect]);

  const handleCorrect = () => {
    if (isResult && isCorrectAnswer !== null) {
      next();
      return;
    }

    const result = selectedAnswer === question?.answer;
    setIsCorrect(result);
    handleSubmit(result);
  };

  const handleShowExplanation = () => {
    if (snap === null) {
      return;
    }

    // string型の場合、"px"部分以外を抽出してnumber型に変換
    const snapNumber =
      typeof snap === "string" ? parseInt(snap.replace("px", ""), 10) : snap;

    if (snapNumber > 148) {
      setSnap("148px");
    } else {
      setSnap("355px");
    }
  };

  return (
    <Drawer
      open={isOpen}
      modal={false}
      direction="bottom"
      dismissible={false}
      snapPoints={["70px", "148px", "355px", 1]}
      activeSnapPoint={snap}
      setActiveSnapPoint={setSnap}
    >
      <DrawerPortal>
        <DrawerContent
          className={clsx(
            "p-2 fixed flex flex-col bg-white border border-gray-200 border-b-none rounded-t-[20px] bottom-0 left-0 right-0 h-full max-h-[97%] mx-[-1px]",
            {
              "bg-green-300 border-green-400": isResult && isCorrectAnswer,
              "bg-red-200 border-red-400": isResult && !isCorrectAnswer,
            }
          )}
        >
          <div
            className={clsx("flex flex-col max-w-md mx-auto w-full", {
              "overflow-y-auto": snap === 1,
              "overflow-hidden": snap !== 1,
            })}
          >
            <div className="mt-2 px-4">
              {isResult ? (
                isCorrectAnswer ? (
                  <DrawerTitle className="animate-slideIn w-full h-full text-green-700 font-bold">
                    <p className="flex justify-between text-green-800">
                      <span className="ml-4">◯ 正解</span>
                      <button onClick={handleShowExplanation}>
                        <small className="text-xs">解説も確認</small>
                      </button>
                    </p>
                  </DrawerTitle>
                ) : (
                  <DrawerTitle className="animate-slideIn w-full h-full text-red-700 font-bold">
                    <p className="flex justify-between text-red-800">
                      <span className="ml-4">✕ 不正解</span>
                      <button onClick={handleShowExplanation}>
                        <small className="text-xs">解説も確認</small>
                      </button>
                    </p>
                  </DrawerTitle>
                )
              ) : null}
            </div>
            <DrawerHeader>
              <Button
                variant={
                  isResult
                    ? isCorrectAnswer
                      ? "success"
                      : "failure"
                    : "primary"
                }
                onClick={handleCorrect}
                disabled={isPrepare}
              >
                {submitText}
              </Button>
            </DrawerHeader>
            <DrawerFooter>
              {isResult ? (
                <div>
                  <h2 className="text-xl text-left font-bold">解説</h2>
                  <p className="p-4 tracking-wide text-pretty">
                    {question?.explanation}
                  </p>
                </div>
              ) : null}
              <p className="mt-10 text-center text-gray-500">
                ※ テーブル機能は未実装です(イメージ図)
              </p>
              <table className="min-w-full rounded-md divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      名前
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      年齢
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      都市
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      田中 太郎
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      28
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      東京
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      鈴木 花子
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      25
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      大阪
                    </td>
                  </tr>
                </tbody>
              </table>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
};

export default QuestionDrawer;
