import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { usePathname } from "next/navigation";

type Prop = {
  label: string;
  href: string;
  iconSrc: string;
  className?: string;
};

const SidebarItem = ({ label, href, iconSrc, className }: Prop) => {
  // 現在のURLとhrefが一致するときactiveStyle
  const isActive = usePathname() === href;

  return (
    <>
      <Link href={href}>
        <div className="flex items-center gap-2 rounded-2xl">
          <Button size="lg" className={className} active={isActive}>
            <Image src={iconSrc} alt={label} width={24} height={24} />
            <span className="ml-3">{label}</span>
          </Button>
        </div>
      </Link>
    </>
  );
};

export default SidebarItem;
