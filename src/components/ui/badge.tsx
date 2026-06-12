import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "border-primary/30 bg-primary/10 text-accent-deep",
        accent: "border-accent/30 bg-accent/10 text-accent-deep",
        outline: "border-slate-200 bg-white/80 text-slate-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
