import cn from "clsx";

import { SliderImages } from "../types";
import styles from "./styles.module.css";

export interface Props {
  setImageIndex: React.Dispatch<React.SetStateAction<number>>;
  images: SliderImages;
  activeImageIndex: number;
  className?: string;
}

export const Counter = ({ setImageIndex, activeImageIndex, images, className, ...rest }: Props) => {
  const classList = cn(styles.root, className);

  return (
    <div className={classList} {...rest}>
      {images.map(({ url }, index) => (
        <button key={url} onClick={() => setImageIndex(index)} aria-label={`View image ${index}`}>
          {index === activeImageIndex ? <p aria-hidden>●</p> : <p aria-hidden>{index + 1}</p>}
        </button>
      ))}
    </div>
  );
};
