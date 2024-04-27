export const runtime = "edge";

import { Button } from "@/components/common/button";
import { Skeleton } from "@/components/common/skeleton";
import {
  SignedIn,
  SignedOut,
  ClerkLoaded,
  ClerkLoading,
  SignUpButton,
  SignInButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Link from "next/link";

/**
 * TODO:
 * 1. テキストをすべてもっと刺さるものに変更する
 * 2. 認証機能が運用環境で動いていないバグの修正
 */
export default function Home() {
  return (
    <div>
      <p className="text-6xl font-bold text-green-500 text-center mb-4">
        Hello!!
      </p>
      <ClerkLoading>
        <Skeleton className="w-full h-[40px] bg-gray-200" />
      </ClerkLoading>
      <ClerkLoaded>
        <SignedOut>
          <div className="flex flex-col gap-1">
            <SignUpButton
              mode="modal"
              afterSignInUrl="/quests"
              afterSignUpUrl="/quests"
            >
              <Button variant="primary">Get Started</Button>
            </SignUpButton>
            <SignInButton
              mode="modal"
              afterSignInUrl="/quests"
              afterSignUpUrl="/quests"
            >
              <Button variant="primaryOutline">
                Already have an account? Sign in
              </Button>
            </SignInButton>
          </div>
        </SignedOut>
        <SignedIn>
          <Link href="/quests" className="w-full">
            <Button size="lg" variant="secondary" className="w-full">
              Continue Learning
            </Button>
          </Link>
        </SignedIn>
      </ClerkLoaded>
    </div>
  );
}
