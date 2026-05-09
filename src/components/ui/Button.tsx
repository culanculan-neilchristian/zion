import { cn } from "@/lib/utils";
import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gold" | "ghost" | "outline";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "gold", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center gap-2 px-8 py-3.5 font-body text-sm font-semibold rounded-lg border-none cursor-pointer tracking-wide transition-all duration-300 ease-out-expo no-underline",
          {
            "bg-gold text-gray-950 hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(205,162,70,0.35)]":
              variant === "gold",
            "bg-transparent text-gray-300 border-2 border-solid border-gray-700 hover:border-gray-500 hover:text-white hover:-translate-y-0.5":
              variant === "ghost",
            "bg-transparent text-white border border-solid border-gold/30 hover:border-gold/60 hover:bg-gold/5 transition-all":
              variant === "outline",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
