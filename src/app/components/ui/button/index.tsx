"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../utils/cn";
import { Slot } from "@radix-ui/react-slot";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-md font-normal transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none  focus:outline-none disabled:opacity-50 font-noto",
  {
    variants: {
      variant: {
        default: "bg-yellow text-black shadow hover:bg-yellow/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "p-3 rounded-lg mt-4  border border-white text-white hover:bg-yellow hover:border-yellow hover:text-black",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        navlink:
          "text-gray-500 border-b-4 border-yellow rounded-none font-semibold duration-200 hover:border-yellow",
        link: "text-gray underline underline-offset-2 font-semibold text-sm",
        tabs: "bg-yellow-100  border border-yellow font-semibold capitalize duration-150",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-[160px] px-3 text-md",
        lg: "h-10 rounded-[160px] px-8 text-xl",
        icon: "h-9 w-9",
        tabs: "h-auto px-4 py-1 rounded-full",
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
  loading?: boolean;
  spinnerColor?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant,
      size,
      asChild = false,
      loading,
      spinnerColor,
      ...props
    },
    ref
  ) => {
    const Component = asChild ? Slot : "button";
    return (
      <Component
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
