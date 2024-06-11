import { IconGoatLogo } from "@/shared/assets/icons";
import BackgroundImage from "@/shared/assets/images/goat-home-image.jpg";

import styles from "./styles.module.css";

export const Welcome = () => {
  return (
    <div className={styles.root}>
      <img src={BackgroundImage} className={styles.background} alt="Background" />
      <div className={styles.content}>
        <IconGoatLogo className={styles.logo} />
      </div>
    </div>
  );
};
