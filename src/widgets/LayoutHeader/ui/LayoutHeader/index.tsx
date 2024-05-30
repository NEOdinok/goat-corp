import { FC, ReactNode } from "react";

import styles from "./styles.module.css";

interface Props {
  leftContentSlot?: ReactNode;
  rightContentSlot?: ReactNode;
}

export const LayoutHeader: FC<Props> = ({ leftContentSlot, rightContentSlot }) => {
  return (
    <header className={styles.root}>
      <div className={styles.left}>{leftContentSlot}</div>
      <div className={styles.right}>{rightContentSlot}</div>
    </header>
  );
};
