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
import { useState } from "react";

export const runtime = "edge";

type Props = {
  snap: number | string | null;
  setSnap: (snap: number | string | null) => void;
  isOpen: boolean;
  answer: string | undefined;
  selectedAnswer: string | null;
  handleSubmit: (payload: boolean) => void;
  isCorrect: boolean;
};

const QuestionDrawer = ({
  snap,
  setSnap,
  isOpen,
  answer,
  selectedAnswer,
  handleSubmit,
  isCorrect,
}: Props) => {
  const [submitText, setSubmitText] = useState("submit");

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
              "bg-green-300 border-green-400": selectedAnswer && isCorrect,
              "bg-red-200 border-red-400": selectedAnswer && !isCorrect,
            }
          )}
        >
          <div
            className={clsx("flex flex-col max-w-md mx-auto w-full", {
              "overflow-y-auto": snap === 1,
              "overflow-hidden": snap !== 1,
            })}
          >
            <div className="mt-2 pl-4">
              {selectedAnswer ? (
                isCorrect ? (
                  <DrawerTitle className="w-full h-full text-green-700 font-bold">
                    <span className="text-green-800">◯</span>
                    <span className="ml-4 text-green-800">正解</span>
                  </DrawerTitle>
                ) : (
                  <DrawerTitle className="w-full h-full text-red-700 font-bold">
                    <span className="text-red-800">✕</span>
                    <span className="ml-4 text-red-800">不正解</span>
                  </DrawerTitle>
                )
              ) : null}
            </div>
            <DrawerHeader>
              <Button
                variant={isCorrect ? "success" : "failure"}
                onClick={() => handleSubmit(selectedAnswer === answer)}
              >
                {submitText}
              </Button>
            </DrawerHeader>
            <DrawerFooter>
              <p className="p-4 mt-10 border-blue-600 rounded-md">
                ここには、テキストがはいるよ。ここには、テキストがはいるよ。ここには、テキストがはいるよ。ここには、テキストがはいるよ。ここには、テキストがはいるよ。ここには、テキストがはいるよ。ここには、テキストがはいるよ。
              </p>
              <table className="mt-10 min-w-full border-blue-600 rounded-md divide-y divide-gray-200">
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
