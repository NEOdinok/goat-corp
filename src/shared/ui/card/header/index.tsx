import * as React from "react";

import { cn } from "@/shared/lib";

export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "font-mono flex bg-foreground flex-col items-center space-y-1.5 p-3",
        className,
      )}
      {...props}
    />
  ),
);

CardHeader.displayName = "CardHeader";
