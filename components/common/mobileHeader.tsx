import { Button } from "@/components/common/button";
import { cn } from "@/lib/utils";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import MobileSidebar from "./mobileSidebar";
import { Skeleton } from "./skeleton";

type Props = {
  className?: string;
};

export const MobileHeader = ({ className }: Props) => {
  return (
    <header
      className={cn(
        "h-[50px] w-full border-b-2 bg-white border-slate-200",
        className
      )}
    >
      <div className="lg:max-w-screen-lg pt-5 px-4 pb-4 mx-auto flex items-center justify-between h-full">
        <div className="flex items-center gap-3">
          <MobileSidebar />
        </div>
        <ClerkLoading>
          <Skeleton className="w-[40px] h-[40px] bg-gray-200" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
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
    </header>
  );
};
