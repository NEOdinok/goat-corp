import * as React from "react";

import { cn } from "@/shared/lib";

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("border bg-card text-card-foreground", className)} {...props} />
  ),
);
Card.displayName = "Card";
