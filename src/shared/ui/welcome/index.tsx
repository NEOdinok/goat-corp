import { Link } from "react-router-dom";

import { IconGoatLogo } from "@/shared/assets/icons";
import BackgroundImage from "@/shared/assets/images/goat-home-image.webp";

import styles from "./styles.module.css";

export const Welcome = () => {
  return (
    <div className={styles.root}>
      <img src={BackgroundImage} className={styles.background} alt="Goat Home Background" />

      <div className={styles.content}>
        <IconGoatLogo className={styles.logo} />

        <div className={styles.menu}>
          <ul className={styles.list}>
            <Link className={styles.link} to="/">
              RED SPRING [2022]
            </Link>
            <Link to="/shop" className={styles.link}>
              Store
            </Link>
            <li className={styles.link}>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>

        <div className={styles.socials}></div>
      </div>
    </div>
  );
};
