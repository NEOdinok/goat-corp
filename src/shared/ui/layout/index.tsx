import { ReactNode } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

import styles from "./styles.module.css";

type Props = {
  navbarSlot?: ReactNode;
  headerSlot: ReactNode;
  bottomSlot?: ReactNode;
  announcementSlot?: ReactNode;
  sidebarSlot?: ReactNode;
};

export const Layout = ({
  navbarSlot,
  headerSlot,
  bottomSlot,
  announcementSlot,
  sidebarSlot,
}: Props) => {
  return (
    <div className={styles.root}>
      {announcementSlot}
      {navbarSlot}
      {headerSlot}
      <div className={styles.container}>
        <div className={styles.content}>
          <Outlet />
        </div>
        {sidebarSlot && <aside className={styles.sidebar}>{sidebarSlot}</aside>}
      </div>
      {/* <footer className={styles.footer}></footer> */}
      {bottomSlot}
      <ScrollRestoration />
    </div>
  );
};
