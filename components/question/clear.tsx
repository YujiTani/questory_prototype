import React from "react";

const ClearScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-500">ゲームクリア！</h1>
        <p className="text-xl mt-4">
          おめでとうございます！すべての問題をクリアしました。
        </p>
      </div>
    </div>
  );
};

export default ClearScreen;
