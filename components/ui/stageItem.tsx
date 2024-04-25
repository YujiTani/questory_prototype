import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const stageVariants = cva(
  "flex block items-center justify-center whitespace-wrap border-2 border-t-0 border-b-[6px]  rounded-[50%] text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wide",
  {
    variants: {
      variant: {
        default: "bg-white text-black border-slate-200 active:border-b-2 hover:bg-slate-100 text-slate-500",
        primary: "bg-sky-400 text-primary-foreground border-sky-500 hover:bg-sky-400/80 active:border-b-0 active:bg-sky-400/80 focus:ring-4 focus:ring-violet-600",
        primaryOutline: "border-white text-sky-500 hover:bg-slate-100",
        secondary: "bg-green-500 text-primary-foreground hover:bg-green-500/80 border-green-600 border-b-[6px] active:border-b-0",
        secondaryOutline: "border-slate-200 text-green-500 hover:bg-green-100",
        super: "bg-indigo-500 text-primary-foreground hover:bg-indigo-500/80 border-indigo-600 border-b-[6px] active:border-b-0",
        superOutline: "border-slate-200 text-indigo-500 hover:bg-indigo-100",
        ghost: "bg-transparent border-2 border-transparent hover:bg-transparent hover:border-slate-200 text-slate-500",
      },
      size: {
        default: "w-32 h-24 px-2 py-2 ",
        sm: "h-9 px-3",
        lg: "h-12 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface StageProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof stageVariants> {
  asChild?: boolean
}

const Stage = React.forwardRef<HTMLButtonElement, StageProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(stageVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Stage.displayName = "Button"

export { Stage, stageVariants }
