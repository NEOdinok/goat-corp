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
            <li>
              <Link
                className="font-mono cursor-pointer p-2 w-fit hover:bg-foreground hover:text-background hover:underline"
                to="/"
              >
                RED SPRING [2022]
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="font-mono cursor-pointer p-2 w-fit hover:bg-foreground hover:text-background hover:underline"
              >
                Store
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="font-mono cursor-pointer p-2 w-fit hover:bg-foreground hover:text-background hover:underline"
              >
                About
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.socials}></div>
      </div>
    </div>
  );
};
