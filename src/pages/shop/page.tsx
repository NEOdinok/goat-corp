import { cn } from "@/shared/lib";
import { Button, Card, CardContent, CardFooter, CardHeader, Label } from "@/shared/ui";

import placeholder1 from "../../shared/assets/images/shirt-1.jpg";
import placeholder2 from "../../shared/assets/images/shirt-2.jpg";
import placeholder3 from "../../shared/assets/images/shirt-3.jpg";
import placeholder4 from "../../shared/assets/images/shirt-4.jpg";

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
    title: "test odio esse rerum voluptate repudiandae",
    url: "https://via.placeholder.com/600/d32776",
    src: placeholder2,
    thumbnailUrl: "https://via.placeholder.com/150/d32776",
  },
  {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/77asasdfih1796",
    src: placeholder3,
    thumbnailUrl: "https://via.placeholder.com/150/77a;sldihasg1796",
  },
  {
    albumId: 1,
    id: 3,
    title: "test odio esse rerum voluptate repudiandae",
    url: "https://via.placeholder.com/600/d327asdfas76",
    src: placeholder2,
    thumbnailUrl: "https://via.placeholder.com/150/d327asdfa76",
  },
  {
    albumId: 1,
    id: 4,
    title: "test odio esse rerum voluptate repudiandae",
    url: "https://via.placeholder.com/600/d32asdfl;j776",
    src: placeholder4,
    thumbnailUrl: "https://via.placeholder.com/150/d32776qw",
  },
];

export const ShopPage = () => {
  const handleSelect = () => {
    console.log("[ShopPage] select item");
  };

  return (
    <div className="grid grid-cols-4 gap-4 py-0 px-4">
      {images.map(({ title, src, url }) => (
        <Card className={cn("")} key={url} onClick={handleSelect}>
          <img src={src} alt={title} />
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5 font-mono">
                <Label htmlFor="name">ФУТБОЛКА</Label>
              </div>

              <div className="flex flex-col space-y-1.5 gap-2 font-mono">
                <Label htmlFor="framework">[2020 REDSPRING] GOAT STRASHNAYA</Label>
                <Label className="font-mono">15 000 ₽</Label>
              </div>
            </div>
          </CardContent>
          <CardFooter className="w-full">
            <Button className="w-full" variant="outline">
              В КОРЗИНУ
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
