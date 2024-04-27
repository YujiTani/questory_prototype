import { Button } from "@/components/common/button";
import { Skeleton } from "@/components/common/skeleton";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="h-20 w-full bg-white border-b-2 border-slate-200">
      <div className="lg:max-w-screen-lg pt-5 px-4 pb-4 mx-auto flex items-center justify-between h-full">
        <div className="flex items-center gap-3">
          <Image
            src="/icon_yuzu.svg"
            alt="app_logo"
            width="0"
            height="0"
            sizes="100vw"
            className="w-16 h-auto rounded-full"
          />
          <h1 className="text-2xl font-extrabold text-green-700 tracking-wide">
            QueStory
          </h1>
        </div>
        <ClerkLoading>
          <Skeleton className="w-[40px] h-[40px] bg-gray-200" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <Button variant="ghost">Login</Button>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  );
};
