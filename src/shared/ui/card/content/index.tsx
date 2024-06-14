import * as React from "react";

import { cn } from "@/shared/lib";

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("px-6 py-3", className)} {...props} />
  ),
);
CardContent.displayName = "CardContent";
