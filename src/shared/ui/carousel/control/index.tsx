import cn from "clsx";
import type { ButtonHTMLAttributes } from "react";
import { forwardRef } from "react";

import styles from "./styles.module.css";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "scroll-right" | "scroll-left";
}

export type Ref = HTMLButtonElement;

export const Control = forwardRef<Ref, Props>(({ className, variant, onClick, ...rest }, ref) => {
  const classList = cn(styles.root, styles[`variant-${variant}`], className);

  return (
    <button
      aria-label="View Next Image"
      ref={ref}
      className={classList}
      onClick={onClick}
      {...rest}
    >
      <p aria-hidden>*</p>
    </button>
  );
});
