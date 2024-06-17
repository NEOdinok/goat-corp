import { cn } from "@/shared/lib";
import { mockProducts } from "@/shared/lib/mock-products";

export interface Props {
  className?: string | undefined;
}

export type Ref = HTMLButtonElement;

export const Gallery = ({ className }: Props) => {
  const rootStyles = "";
  const classList = cn(rootStyles, className);

  return (
    <section aria-label="Image Gallery" className={classList}>
      {mockProducts.map(({ url, title, src }) => (
        <img key={url} src={src} className="w-full aspect-[1/1] object-cover" alt={title} />
      ))}
    </section>
  );
};
