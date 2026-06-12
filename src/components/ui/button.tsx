import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-accent-deep text-white shadow-lg shadow-accent-deep/25 hover:shadow-xl hover:shadow-accent-deep/35 hover:-translate-y-0.5",
        primary:
          "bg-primary text-foreground shadow-lg shadow-primary/30 hover:bg-primary-light hover:shadow-xl hover:-translate-y-0.5",
        outline:
          "border-2 border-accent-deep/20 bg-white/80 text-accent-deep backdrop-blur-sm hover:border-primary hover:bg-primary/10",
        ghost: "text-accent-deep hover:bg-accent-deep/5",
        glass:
          "glass text-accent-deep hover:bg-white/90 hover:shadow-lg",
      },
      size: {
        default: "h-12 px-7 py-2",
        sm: "h-10 px-5 text-sm",
        lg: "h-14 px-9 text-lg",
        xl: "h-16 px-11 text-xl",
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
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
