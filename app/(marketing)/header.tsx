import { Button } from "@/components/ui/button";
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
    <header className="h-20 w-full border-b-2 border-slate-200">
      <div className="lg:max-w-screen-lg pt-5 px-4 pb-4 mx-auto flex items-center justify-between h-full">
        <div className="flex items-center gap-3">
          <Image
            className="rounded-full"
            src="/icon_yuzu.svg"
            alt="logo"
            width={60}
            height={60}
          />
          <h1 className="text-2xl font-extrabold text-green-700 tracking-wide">
            QueStory
          </h1>
        </div>
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
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
