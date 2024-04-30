"use client";

import { StageHeader } from "@/components/stage/stageHeader";
import { MAX_WIDTH } from "@/data/content";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <StageHeader className="fixed top-0 left-0 z-20 h-[50px]" />
      <div
        className={`pt-[50px] md:w-[50%] max-w[600px] mx-auto p-2 h-full tracking-wide`}
      >
        {children}
      </div>
    </>
  );
};

export default MainLayout;
