import { FC, ReactNode } from "react";

interface Props {
  leftContentSlot?: ReactNode;
  rightContentSlot?: ReactNode;
}

export const LayoutHeader: FC<Props> = ({ leftContentSlot, rightContentSlot }) => {
  return (
    <header className="flex h-16 items-center justify-between px-4">
      {/* <Logo /> */}
      <div className="flex justify-start gap-4">{leftContentSlot}</div>
      <div className="flex justify-end gap-4">
        {rightContentSlot}
        {/* {darkModeIsEnabled && <ChangeTheme />} */}
      </div>
    </header>
  );
};
