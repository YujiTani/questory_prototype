import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import Sidebar from "./sidebar";
import Image from "next/image";

type Props = {
  className?: string;
};

const MobileSidebar = ({ className }: Props) => {
  return (
    <Sheet>
      <SheetTrigger>
        <Image src="/image/icon_menu_5.svg" alt="logo" width={40} height={40} />
      </SheetTrigger>
      <SheetContent className="p-0 z-[100]" side="left">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
