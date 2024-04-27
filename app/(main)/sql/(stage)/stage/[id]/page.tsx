import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerPortal,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useState } from "react";
import clsx from "clsx";
import MultipleChoice from "@/components/question/multipleChoice";

/**
 * TODO:
 * 1. StageLayoutとして、切り出し取得データによって形を変えるようにする
 * 2. 共通部分は、問題提出部分とフッターの解答&補足部分
 * 3. APIが出来たらFetch処理に変更する
 * 4. Drawer部分をコンポーネント化する
 * 5. 解説テキストとDB部分を受け取れるようにする
 * 6. 回答部分のコンポーネントを作成する
 * 7. questionに解答コンポーネントはどれを使うかcodeを渡す
 * 8. drawer以外のボタンを押すとdrawerが閉じるバグの修正
 */
const StagePage = ({ params }: { params: { id: string } }) => {
  const [snap, setSnap] = useState<number | string | null>("148px");
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div>
        <div className="mt-4 p-3 border-2 border-slate-400 rounded-md flex flex-col gap-3">
          {/* 問題提出コンポーネント */}
          <h1 className="text-sm font-bold">ユーザー情報取得</h1>
          <Separator orientation="horizontal" />
          <p className="text-balance break-words">
            IDが1のユーザーの名前を取得する
          </p>
          <Separator orientation="horizontal" />
          <div className="flex justify-end">
            <span className="text-xs">1 / 11</span>
          </div>
        </div>
        <main className="mt-20">
          <MultipleChoice
            answers={[
              { id: "1", text: "りんご" },
              { id: "2", text: "バナナ" },
              { id: "3", text: "みかん" },
            ]}
          />
          {/* 解答欄コンポーネント(問題の提出形式により、どれを表示させるのか分岐する) */}
        </main>
        <footer>
          <Drawer
            open={isOpen}
            onOpenChange={setIsOpen}
            modal={false}
            direction="bottom"
            dismissible={false}
            snapPoints={["148px", "355px", 1]}
            activeSnapPoint={snap}
            setActiveSnapPoint={setSnap}
          >
            <DrawerPortal>
              <DrawerContent className="fixed flex flex-col bg-white border border-gray-200 border-b-none rounded-t-[10px] bottom-0 left-0 right-0 h-full max-h-[97%] mx-[-1px]">
                <div
                  className={clsx("flex flex-col max-w-md mx-auto w-full", {
                    "overflow-y-auto": snap === 1,
                    "overflow-hidden": snap !== 1,
                  })}
                >
                  <DrawerHeader className="p-2">
                    <Button variant="primary">Submit</Button>
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
        </footer>
      </div>
    </>
  );
};

export default StagePage;
