import { Button } from "@/components/ui/button";
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

type Props = {
  className?: string;
};

export const MobileHeader = ({ className }: Props) => {
  return (
    <header
      className={cn("h-[50px] w-full border-b-2 border-slate-200", className)}
    >
      <div className="lg:max-w-screen-lg pt-5 px-4 pb-4 mx-auto flex items-center justify-between h-full">
        <div className="flex items-center gap-3">
          <MobileSidebar />
        </div>
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton cla afterSignOutUrl="/" />
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
