import { useState } from "react";

import { cn } from "@/shared/lib";
import { Button } from "@/shared/ui/btn";

interface Props {
  className?: string | undefined;
}

export const AmountSelect = ({ className }: Props) => {
  const rootStyle =
    "inline-flex h-12 tems-center justify-between font-mono border border-foreground";
  const classList = cn(rootStyle, className);

  const [amount, setAmount] = useState<number>(0);

  const increment = () => {
    setAmount((val) => (val += 1));
  };

  const decrement = () => {
    setAmount((val) => {
      if (val === 0) return 0;
      return (val -= 1);
    });
  };

  return (
    <div className={classList}>
      <Button variant="ghost" className="h-full aspect-square p-0" onClick={decrement}>
        <MinusIcon className="w-5 h-5" />
      </Button>

      <div className="flex items-center font-mono justify-center w-12 text-center">{amount}</div>

      <Button variant="ghost" className="h-full aspect-square p-0" onClick={increment}>
        <PlusIcon className="w-5 h-5" />
      </Button>
    </div>
  );
};

const MinusIcon = ({ className }: Props) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  );
};

const PlusIcon = ({ className }: Props) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
};
