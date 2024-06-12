import * as Select from "@radix-ui/react-select";
import cn from "clsx";

import styles from "./styles.module.css";

type Props = {
  className?: string;
  variant?: "primary";
};

export const BaseSelect = ({ className, variant }: Props) => {
  const classList = cn(styles.root, styles[`variant-${variant}`], className);

  return (
    <Select.Root defaultValue="">
      <Select.Trigger className={cn(classList, styles.trigger)} aria-label="Size selector">
        <Select.Value placeholder="SIZE" />
        <Select.Icon />
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className={styles.content}>
          <Select.Viewport>
            <Select.Group className={styles.group}>
              <Select.Item className={styles.item} value="XL">
                <Select.ItemText>XL</Select.ItemText>
              </Select.Item>
              <Select.Separator className={styles.separator} />
              <Select.Item className={styles.item} value="L">
                <Select.ItemText>L</Select.ItemText>
              </Select.Item>
              <Select.Separator className={styles.separator} />
              <Select.Item className={styles.item} value="M">
                <Select.ItemText>M</Select.ItemText>
              </Select.Item>
              <Select.Separator className={styles.separator} />
              <Select.Item className={styles.item} value="S">
                <Select.ItemText>S</Select.ItemText>
              </Select.Item>
            </Select.Group>
          </Select.Viewport>
          <Select.Arrow />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
