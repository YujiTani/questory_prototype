"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { usePageTransitionGuard } from "@/app/hooks/usePageTransitionGuard";

type Props = React.ComponentProps<"header">;

export const StageHeader = ({ className }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    if (window.confirm("解答状況は失われます、前の画面に戻りますか？")) {
      router.back();
    }
  };

  usePageTransitionGuard();

  return (
    <header className={cn("h-[50px] w-full", className)}>
      <div className="lg:max-w-screen-lg pt-5 px-4 pb-4 mx-auto flex items-center justify-end h-full">
        <Button size="sm" onClick={handleClick}>
          <ArrowLeftIcon className="size-4" />
        </Button>
      </div>
    </header>
  );
};
