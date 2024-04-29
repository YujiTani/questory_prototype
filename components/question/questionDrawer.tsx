"use client";

import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerPortal,
  DrawerTitle,
} from "@/components/question/drawer";
import clsx from "clsx";
import { Button } from "@/components/common/button";
import { useEffect, useState } from "react";
import { StageState } from "@/app/hooks/stageReducer";
import { selectQuestion, sortQuestion } from "@/data/questions";

export const runtime = "edge";

type Props = {
  snap: number | string | null;
  setSnap: (snap: number | string | null) => void;
  isOpen: boolean;
  question: selectQuestion | sortQuestion | null;
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
  const isResult = state === "result";
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    if (isResult && isCorrect) {
      setSubmitText("Next");
    } else if (isResult && !isCorrect) {
      setSubmitText("OK");
    } else {
      setSubmitText("submit");
    }
  }, [isResult, isCorrect]);

  const handleCorrect = () => {
    if (isResult && isCorrectAnswer !== null) {
      next();
      return;
    }

    const result = selectedAnswer === question?.answer;
    setIsCorrect(result);
    handleSubmit(result);
  };

  return (
    <Drawer
      open={isOpen}
      modal={false}
      direction="bottom"
      dismissible={false}
      snapPoints={["148px", "355px", 1]}
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
                      <small className="text-xs">解説も確認</small>
                    </p>
                  </DrawerTitle>
                ) : (
                  <DrawerTitle className="animate-slideIn w-full h-full text-red-700 font-bold">
                    <p className="flex justify-between text-red-800">
                      <span className="ml-4">✕ 不正解</span>
                      <small className="text-xs">解説も確認</small>
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
                    : "default"
                }
                onClick={handleCorrect}
              >
                {submitText}
              </Button>
            </DrawerHeader>
            <DrawerFooter>
              {isResult ? (
                <p className="p-4 mt-6 tracking-wide text-pretty">
                  {question?.explanation}
                </p>
              ) : null}
              <table className="mt-6 min-w-full rounded-md divide-y divide-gray-200">
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
