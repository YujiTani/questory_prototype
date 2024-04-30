"use client";

import { StageHeader } from "@/components/stage/stageHeader";
import { MAX_WIDTH } from "@/data/content";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <StageHeader className="lg:hidden fixed top-0 left-0 z-20" />
      <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
        <div className={`${MAX_WIDTH} mx-auto p-2 h-full tracking-wide`}>
          {children}
        </div>
      </main>
    </>
  );
};

export default MainLayout;
