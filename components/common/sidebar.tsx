"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import SidebarItem from "./sidebarItem";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react";
import { Button } from "./button";
import { usePathname } from "next/navigation";
import { Skeleton } from "./skeleton";

export const runtime = "edge";

type Props = {
  className?: string;
};

const Sidebar = ({ className }: Props) => {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  return (
    <div
      className={cn(
        "flex h-full w-[256px] m-auto lg:fixed left-0 top-0 p-4 border-r- flex-col",
        className
      )}
    >
      <Link href="/">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-extrabold text-green-700 tracking-wide">
            QueStory
          </h1>
        </div>
      </Link>
      <div className="mt-10 h-full flex flex-col gap-5 justify-between">
        <SidebarItem
          href="/quests"
          iconSrc="/image/icon_Destination.svg"
          label="Quests"
          className="w-[230px] m-auto"
        />
        <div>
          <ClerkLoading>
            <Skeleton className="w-full h-[40px] bg-gray-200" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedIn>
              <UserButton afterSignOutUrl="/"></UserButton>
            </SignedIn>
            <SignedOut>
              <SignInButton
                mode="modal"
                afterSignInUrl="/quests"
                afterSignUpUrl="/quests"
              >
                <Button variant="ghost">Login</Button>
              </SignInButton>
            </SignedOut>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
