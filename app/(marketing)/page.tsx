export const runtime = "edge";

import { Button } from "@/components/common/button";
import { Skeleton } from "@/components/common/skeleton";
import { TESTING } from "@/data/content";
import {
  SignedIn,
  SignedOut,
  ClerkLoaded,
  ClerkLoading,
  SignUpButton,
  SignInButton,
} from "@clerk/nextjs";
import Link from "next/link";

/**
 * TODO:
 * 1. テキストをすべてもっと刺さるものに変更する
 * 2. 認証機能が運用環境で動いていないバグの修正
 */
export default function Home() {
  const startText = "Get Started!";

  return (
    <div>
      <p className="text-6xl font-bold text-green-500 text-center mb-4">
        Hello!!
      </p>

      {TESTING ? (
        <div className="w-3/4 max-w-[400px] mx-auto">
          <Link href="/quests" className="w-full">
            <Button variant="primary" className="w-full">
              {startText}
            </Button>
          </Link>
          <p className="mt-2 text-gray-500 text-sm">
            Authentication features will be added in future updates
          </p>
          <p className="mt-2 text-gray-500 text-sm">※ スマホ推奨です</p>
        </div>
      ) : (
        <>
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
                  <Button variant="primary">{startText}</Button>
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
        </>
      )}
    </div>
  );
}
