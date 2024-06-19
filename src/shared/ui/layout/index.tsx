import { ReactNode } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

import { ThemeProvider } from "@/widgets/ThemeProvider";

import { Toaster } from "@/shared/ui";

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
  // ??? How to correctly make aside tag contain sidebar ?
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className={styles.root}>
        <Toaster />
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
