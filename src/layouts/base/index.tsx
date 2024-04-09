import styles from "./styles.module.css";
import { FC, ReactNode } from "react";
// import { routes } from "@/shared/routing";

interface LayoutBaseProps {
  children: ReactNode;
}

const primaryNavItems = [
  {
    id: "boards",
    title: "Boards",
    // to: routes.home,
  },
  {
    id: "members",
    title: "Members",
    // to: routes.home,
  },
];

export const LayoutBase: FC<LayoutBaseProps> = ({ children }) => {
  return (
    <>
      <header className={styles.header}>{/* <SidebarNavigation></SidebarNavigation> */}</header>
      <main className={styles.main}>{children}</main>
    </>
  );
};
