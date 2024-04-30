import { MobileHeader } from "@/components/common/mobileHeader";
import Sidebar from "@/components/common/sidebar";
import { MAX_WIDTH } from "@/data/content";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className={`${MAX_WIDTH} mx-auto`}>
        <Sidebar className="hidden lg:flex" />
        <MobileHeader className="lg:hidden fixed top-0 left-0 z-20" />
        <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
          <div className="max-w-[70%] mx-auto p-4 h-full">{children}</div>
        </main>
      </div>
    </>
  );
};

export default MainLayout;
