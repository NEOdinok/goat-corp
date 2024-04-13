import { ReactNode } from "react";
import styles from "./styles.module.css";

type Props = {
  navbarSlot?: ReactNode;
  headerSlot: ReactNode;
  bottomSlot?: ReactNode;
  announcementSlot?: ReactNode;
  sidebarSlot?: ReactNode;
};

export const Layout = ({ navbarSlot }: Props) => {
  return <div className={styles.root}></div>;
};
