import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 tracking-wide break-keep text-pretty",
  {
    variants: {
      variant: {
        default:
          "bg-white text-black border-slate-200 border-2 border-b-[6px] active:border-b-2 hover:bg-slate-100 text-slate-500",
        primary:
          "bg-sky-400 text-primary-foreground hover:bg-sky-400/80 border-sky-500 border-b-[6px] active:border-b-0",
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
        success:
          "bg-green-500 text-primary-foreground hover:bg-green-500/60 border-green-600 border-b-[6px] active:border-b-0",
        failure:
          "bg-red-500 text-primary-foreground hover:bg-red-500/60 border-red-600 border-b-[6px] active:border-b-0",
      },
      size: {
        default: "h-11 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-12 px-8",
        icon: "h-10 w-10",
        rounded: "rounded-full",
      },
      active: {
        true: "bg-muted outline-3 outline-offset-4 outline-slate-600",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, active, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, active, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
