import { FC, ReactNode } from "react";

import styles from "./styles.module.css";

interface Props {
  leftContentSlot?: ReactNode;
  rightContentSlot?: ReactNode;
}

export const LayoutFooter: FC<Props> = ({ leftContentSlot, rightContentSlot }) => {
  return (
    <footer className={styles.root}>
      <div className={styles.left}>{leftContentSlot}</div>
      <div className={styles.right}>{rightContentSlot}</div>
    </footer>
  );
};
