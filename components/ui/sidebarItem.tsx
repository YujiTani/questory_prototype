import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";

type Prop = {
  label: string;
  href: string;
  iconSrc: string;
  className?: string;
};

const SidebarItem = ({ label, href, iconSrc, className }: Prop) => {
  return (
    <>
      <Link href={href}>
        <div className="flex items-center gap-2">
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
