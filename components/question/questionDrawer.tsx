import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerPortal,
} from "@/components/question/drawer";
import clsx from "clsx";
import { Button } from "../common/button";

type Props = {
  snap: number | string | null;
  isOpen: boolean;
};

const QuestionDrawer = ({ snap, isOpen }: Props) => {
  return (
    <Drawer
      open={isOpen}
      modal={false}
      direction="bottom"
      dismissible={false}
      snapPoints={["148px", "355px", 1]}
      activeSnapPoint={snap}
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
  );
};

export default QuestionDrawer;
