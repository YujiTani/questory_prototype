import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const questVariants = cva(
  "flex block items-center justify-center whitespace-wrap rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wide",
  {
    variants: {
      variant: {
        default:
          "bg-white text-black border-slate-200 border-2 border-b-[4px] active:border-b-2 hover:bg-slate-100 text-slate-500",
        primary:
          "bg-sky-400 text-primary-foreground hover:bg-sky-400/80 border-sky-500 border-b-[4px] active:border-b-0",
        primaryOutline: "border-white text-sky-500 hover:bg-slate-100",
        secondary:
          "bg-green-500 text-primary-foreground hover:bg-green-500/80 border-green-600 border-b-[6px] active:border-b-0",
        secondaryOutline: "border-slate-200 text-green-500 hover:bg-green-100",
        danger:
          "bg-red-500 text-primary-foreground hover:bg-red-500/80 border-red-600 border-b-[6px] active:border-b-0",
        dangerOutline: "border-slate-200 text-red-500 hover:bg-red-100",
        super:
          "bg-indigo-500 text-primary-foreground hover:bg-indigo-500/80 border-indigo-600 border-b-[6px] active:border-b-0",
        superOutline: "border-slate-200 text-indigo-500 hover:bg-indigo-100",
        ghost:
          "bg-transparent border-2 border-transparent hover:bg-transparent hover:border-slate-200 text-slate-500",
      },
      size: {
        default: "w-36 h-52 aspect-ratio-[4/3] px-4 py-2", // Changed to maintain aspect ratio
        sm: "h-9 px-3",
        lg: "h-12 px-8",
        icon: "h-10 w-10",
        rounded: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface QuestProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof questVariants> {
  asChild?: boolean;
}

const QuestCard = React.forwardRef<HTMLButtonElement, QuestProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(questVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
QuestCard.displayName = "Button";

export { QuestCard, questVariants };
