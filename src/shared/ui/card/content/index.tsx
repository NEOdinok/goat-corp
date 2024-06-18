import * as React from "react";

import { cn } from "@/shared/lib";

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("px-4 py-4", className)} {...props} />
  ),
);
CardContent.displayName = "CardContent";
