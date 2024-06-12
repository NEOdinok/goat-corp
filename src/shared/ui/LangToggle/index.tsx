import * as ToggleGroup from "@radix-ui/react-toggle-group";

import styles from "./styles.module.css";

export const LangToggle = () => (
  <ToggleGroup.Root
    className={styles.root}
    type="single"
    defaultValue="ru"
    aria-label="Text alignment"
  >
    <ToggleGroup.Item className={styles.item} value="ru" aria-label="Select Russian">
      РУ
    </ToggleGroup.Item>
    <ToggleGroup.Item className={styles.item} value="en" aria-label="Select English">
      EN
    </ToggleGroup.Item>
  </ToggleGroup.Root>
);
