import { FC, ReactNode } from "react";

interface Props {
  leftContentSlot?: ReactNode;
  rightContentSlot?: ReactNode;
}

export const LayoutFooter: FC<Props> = ({ leftContentSlot, rightContentSlot }) => {
  return (
    <footer className="hidden sm:flex w-full justify-between items-center px-4 h-16">
      <div className="flex justify-end gap-4">{leftContentSlot}</div>
      <div className="flex justify-end gap-4">{rightContentSlot}</div>
    </footer>
  );
};
