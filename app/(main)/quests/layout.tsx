import { MobileHeader } from "@/components/ui/mobileHeader";
import Sidebar from "@/components/ui/sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Sidebar className="hidden lg:flex" />
      <MobileHeader className="lg:hidden fixed top-0 left-0 z-20" />
      <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
        <div className="max-w-[1056px] mx-auto p-4 h-full">{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
