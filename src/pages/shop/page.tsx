import { useNavigate } from "react-router-dom";

import { Button, Card, CardContent, CardFooter, Label } from "@/shared/ui";

import placeholder1 from "../../shared/assets/images/shirt-1.jpg";
import placeholder2 from "../../shared/assets/images/shirt-2.jpg";
import placeholder3 from "../../shared/assets/images/shirt-3.jpg";
import placeholder4 from "../../shared/assets/images/shirt-4.jpg";

const images = [
  {
    albumId: 1,
    uid: 100,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    src: placeholder1,
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
  {
    albumId: 1,
    uid: 111,
    title: "test odio esse rerum voluptate repudiandae",
    url: "https://via.placeholder.com/600/d32776",
    src: placeholder2,
    thumbnailUrl: "https://via.placeholder.com/150/d32776",
  },
  {
    albumId: 1,
    uid: 222,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/77asasdfih1796",
    src: placeholder3,
    thumbnailUrl: "https://via.placeholder.com/150/77a;sldihasg1796",
  },
  {
    albumId: 1,
    uid: 333,
    title: "test odio esse rerum voluptate repudiandae",
    url: "https://via.placeholder.com/600/d327asdfas76",
    src: placeholder2,
    thumbnailUrl: "https://via.placeholder.com/150/d327asdfa76",
  },
  {
    albumId: 1,
    uid: 444,
    title: "test odio esse rerum voluptate repudiandae",
    url: "https://via.placeholder.com/600/d32asdfl;j776",
    src: placeholder4,
    thumbnailUrl: "https://via.placeholder.com/150/d32776qw",
  },
];
export const ShopPage = () => {
  const navigate = useNavigate();

  const handleSelect = (uid: number) => {
    navigate(`/shop/${uid}`);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 py-2 px-2 sm:py-0">
      {images.map(({ title, src, url, uid }) => (
        <Card className="cursor-pointer group" key={url} onClick={() => handleSelect(uid)}>
          <img
            src={src}
            alt={title}
            className="group-hover:opacity-70 group-hover:border-2 group-hover:border-primary"
          />
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5 font-mono">
                <Label htmlFor="name">ФУТБОЛКА</Label>
              </div>

              <div className="flex flex-col space-y-1.5 gap-2 font-mono">
                <Label className="font-mono font-normal">[2020 REDSPRING]</Label>
                <Label className="font-mono font-normal">15 000 ₽</Label>
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
