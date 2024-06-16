import { cn } from "@/shared/lib";

// import placeholderImg from "../../assets/images/product-placeholder.png";
import placeholder1 from "../../assets/images/shirt-1.jpg";
// import placeholder2 from "../../assets/images/shirt-2.jpg";
import placeholder3 from "../../assets/images/shirt-3.jpg";
import placeholder4 from "../../assets/images/shirt-4.jpg";
import styles from "./styles.module.css";

export interface Props {
  className?: string | undefined;
}

export type Ref = HTMLButtonElement;

const images = [
  {
    albumId: 1,
    id: 0,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    src: placeholder1,
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
  {
    albumId: 1,
    id: 1,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    src: placeholder3,
    thumbnailUrl: "https://via.placeholder.com/150/771796",
  },
  {
    albumId: 1,
    id: 2,
    title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    url: "https://via.placeholder.com/600/d32776",
    src: placeholder4,
    thumbnailUrl: "https://via.placeholder.com/150/d32776",
  },
];

export const Gallery = ({ className }: Props) => {
  const classList = cn(styles.root, className);

  return (
    <section aria-label="Image Gallery" className={classList}>
      {images.map(({ url, title, src }) => (
        <img key={url} src={src} className={styles.image} alt={title} />
      ))}
    </section>
  );
};
