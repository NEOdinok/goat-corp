import * as React from "react";

import { cn } from "@/shared/lib";

export const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-l font-mono text-background leading-none tracking-tight", className)}
    {...props}
  >
    {children || "Default Title"}
  </h3>
));
CardTitle.displayName = "CardTitle";
