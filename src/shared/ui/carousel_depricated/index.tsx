import { useState } from "react";

import { Control } from "./control";
import { Counter } from "./counter";
import styles from "./styles.module.css";
import { SliderImages } from "./types";

// export type Props = {
//   imgs?: SliderImages;
// };

export const Carousel = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const images: SliderImages = [
    {
      albumId: 1,
      id: 0,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952",
    },
    {
      albumId: 1,
      id: 1,
      title: "reprehenderit est deserunt velit ipsam",
      url: "https://via.placeholder.com/600/771796",
      thumbnailUrl: "https://via.placeholder.com/150/771796",
    },
    {
      albumId: 1,
      id: 2,
      title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      url: "https://via.placeholder.com/600/d32776",
      thumbnailUrl: "https://via.placeholder.com/150/d32776",
    },
  ];

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  };

  const showPreviousImage = () => {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  };

  return (
    <section aria-label="Image carousel" className={styles.root}>
      <div className={styles.images}>
        {images.map(({ url, title }, index) => (
          <img
            key={url}
            src={url}
            className={styles.image}
            alt={title}
            aria-hidden={imageIndex !== index}
            style={{
              translate: `${-100 * imageIndex}%`,
            }}
          />
        ))}
      </div>

      <Control variant="scroll-left" onClick={showPreviousImage} />
      <Control variant="scroll-right" onClick={showNextImage} />
      <Counter images={images} setImageIndex={setImageIndex} activeImageIndex={imageIndex} />
    </section>
  );
};
