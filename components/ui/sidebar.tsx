"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import SidebarItem from "./sidebarItem";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react";
import { Button } from "./button";
import { Loader } from "lucide-react";

type Props = {
  className?: string;
};

const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex h-full w-[256px] m-auto lg:fixed left-0 top-0 p-4 border-r- flex-col",
        className
      )}
    >
      <Link href="/">
        <div className="flex items-center gap-3">
          <Image
            className="rounded-full"
            src="/icon_yuzu.svg"
            alt="logo"
            width={40}
            height={40}
          />
          <h1 className="text-2xl font-extrabold text-green-700 tracking-wide">
            Clone Duolingo
          </h1>
        </div>
      </Link>
      <div className="mt-10 h-full flex flex-col gap-5 justify-between">
        <SidebarItem
          href="/learn"
          iconSrc="/icon_learn.svg"
          label="Learn"
          className="w-[230px] m-auto"
        />
        <div>
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedIn>
              <UserButton afterSignOutUrl="/">Hello</UserButton>
            </SignedIn>
            <SignedOut>
              <SignInButton
                mode="modal"
                afterSignInUrl="/learn"
                afterSignUpUrl="/learn"
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
