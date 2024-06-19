import * as React from "react";

import { cn } from "@/shared/lib";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        //  ring-offset-background
        //  focus-visible:ring-offset-2
        className={cn(
          `
          flex h-10 w-full px-3 py-2
          outline-none focus-visible:outline-none border border-input bg-background
          ring-inset focus-visible:ring-2 focus-visible:ring-primary
          file:border-0 file:bg-transparent file:text-sm file:font-medium
          placeholder:text-muted-foreground text-sm
          transition-shadow duration-150 ease-in-out
          disabled:cursor-not-allowed disabled:opacity-50`,
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
