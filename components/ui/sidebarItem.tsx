import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";

type Prop = {
  label: string;
  href: string;
  iconSrc: string;
  className?: string;
  isActive?: boolean;
};

const SidebarItem = ({ label, href, iconSrc, className }: Prop) => {
  return (
    <>
      <Link href={href}>
        {/* URLが一致するときにactiveStyleがあたるようにする、ホバースタイルをあてるようにする、sidebar用のボタンとして切り出す */}
        <div className="flex items-center gap-2 outline-dashed outline-4 outline-pink-200 rounded-2xl">
          <Button size="lg" className={className}>
            <Image src={iconSrc} alt={label} width={24} height={24} />
            <span className="ml-3">{label}</span>
          </Button>
        </div>
      </Link>
    </>
  );
};

export default SidebarItem;
