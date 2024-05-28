import { MAX_WIDTH } from "@/data/content";
import Footer from "./footer";
import { Header } from "./header";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`${MAX_WIDTH} mx-auto min-h-screen flex flex-col bg-red-200`}
    >
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
