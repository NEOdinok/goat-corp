import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import * as React from "react";
import { Circle } from "lucide-react";

import { cn } from "@/shared/lib";

export const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    // sm:h-4 sm:w-4 sm:border
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        `aspect-square rounded-full
        h-6 w-6 border-2  border-primary   text-primary ring-offset-background
        focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
        disabled:cursor-not-allowed disabled:opacity-50`,
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        {/* sm:h-2.5 sm:w-2.5  */}
        <Circle className="h-3.5 w-3.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
