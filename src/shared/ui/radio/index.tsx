import * as RadioGroup from "@radix-ui/react-radio-group";

import styles from "./styles.module.css";

export const BaseRadio = () => (
  <form>
    <RadioGroup.Root className={styles.root} defaultValue="default">
      <div className={styles.demo}>
        <RadioGroup.Item className={styles.item} value="gosha" id="r1">
          <RadioGroup.Indicator className={styles.indicator} />
        </RadioGroup.Item>
        <label className={styles.label} htmlFor="r1">
          Gosha
        </label>
      </div>

      <div className={styles.demo}>
        <RadioGroup.Item className={styles.item} value="mark" id="r2">
          <RadioGroup.Indicator className={styles.indicator} />
        </RadioGroup.Item>
        <label className={styles.label} htmlFor="r2">
          Mark
        </label>
      </div>
    </RadioGroup.Root>
  </form>
);
