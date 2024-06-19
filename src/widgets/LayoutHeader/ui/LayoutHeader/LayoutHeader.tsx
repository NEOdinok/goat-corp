import { FC, ReactNode } from "react";

import { cn } from "@/shared/lib";

interface Props {
  leftContentSlot?: ReactNode;
  rightContentSlot?: ReactNode;
  className?: undefined | string;
}

export const LayoutHeader: FC<Props> = ({ leftContentSlot, rightContentSlot, className }) => {
  const rootStyles = "sticky z-10 top-0 flex h-16 items-center justify-between px-4 bg-background";
  const classList = cn(rootStyles, className);

  return (
    <header className={classList}>
      {/* <Logo /> */}
      <div className="flex justify-start">{leftContentSlot}</div>
      <div className="flex justify-end gap-4">
        {rightContentSlot}
        {/* {darkModeIsEnabled && <ChangeTheme />} */}
      </div>
    </header>
  );
};
