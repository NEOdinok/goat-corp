import { ReactNode } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

import { ThemeProvider } from "@/widgets/ThemeProvider";

import styles from "./styles.module.css";

type Props = {
  navbarSlot?: ReactNode;
  headerSlot?: ReactNode;
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
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className={styles.root}>
        {announcementSlot}
        {navbarSlot}
        {headerSlot}
        <div className={styles.container}>
          <div className={styles.content}>
            <Outlet />
          </div>
          {sidebarSlot && <aside>{sidebarSlot}</aside>}
        </div>
        {/* <footer className={styles.footer}></footer> */}
        {bottomSlot}
        <ScrollRestoration />
      </div>
    </ThemeProvider>
  );
};
