import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "../common/button";

const ClearScreen = () => {
  const router = useRouter();

  const handleClick = () => {
    if (window.confirm("ステージ選択画面に戻ってよいですか？")) {
      router.back();
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-500">ゲームクリア！</h1>
        <p className="text-xl mt-4">
          おめでとうございます！すべての問題をクリアしました
        </p>
        <div className="mt-8">
          <Button size="sm" onClick={handleClick}>
            ステージ選択画面に戻る
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ClearScreen;
