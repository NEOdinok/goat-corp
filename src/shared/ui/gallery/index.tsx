import styles from "./styles.module.css";

const images = [
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

export const Gallery = () => {
  return (
    <section aria-label="Image Gallery" className={styles.gallery}>
      {images.map(({ url, title }) => (
        <img key={url} src={url} className={styles.image} alt={title} />
      ))}
    </section>
  );
};
