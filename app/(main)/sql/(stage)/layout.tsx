import { StageHeader } from "@/components/ui/stageHeader";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <StageHeader className="lg:hidden fixed top-0 left-0 z-20" />
      <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
        <div className="max-w-[1056px] mx-auto p-4 h-full">{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
