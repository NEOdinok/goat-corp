import { FC } from "react";
import { Link } from "react-router-dom";

import { IconInstagram, IconYoutube } from "@/shared/assets/icons";

import styles from "./styles.module.css";

export const HomeLayoutFooter: FC = () => (
  <footer className={styles.root}>
    <div className={styles.social}>
      <Link to="https://www.youtube.com/@goat7480" target="_blank">
        <IconYoutube />
      </Link>
      <Link to="https://www.youtube.com/@goat7480" target="_blank">
        <IconInstagram />
      </Link>
    </div>
    <span className={styles.terms}>©2024 GOAT.CORP</span>
  </footer>
);
