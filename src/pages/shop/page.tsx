import { useNavigate } from "react-router-dom";

import { useGetProductsQuery } from "@/shared/api/baseApi";
import { Button, Card, CardContent, CardFooter, Label } from "@/shared/ui";

export const ShopPage = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetProductsQuery();

  const handleSelect = (id: number) => {
    navigate(`/shop/${id}`);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 py-2 px-2 sm:py-0">
      {isLoading ? (
        <div className="text-3xl">Загрузка...</div>
      ) : (
        data?.products.map(({ id, name, imageUrl, maxPrice, manufacturer }) => (
          <Card className="cursor-pointer group" key={id} onClick={() => handleSelect(id)}>
            <img
              src={imageUrl}
              alt={name}
              className="group-hover:opacity-70 group-hover:border-2 group-hover:border-primary"
            />
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5 font-mono">
                  <Label htmlFor="name">{manufacturer}</Label>
                </div>

                <div className="flex flex-col space-y-1.5 gap-2 font-mono">
                  <Label className="font-mono font-normal">{name}</Label>
                  <Label className="font-mono font-normal">{maxPrice} ₽</Label>
                </div>
              </div>
            </CardContent>
            <CardFooter className="w-full">
              <Button className="w-full" variant="outline">
                В КОРЗИНУ
              </Button>
            </CardFooter>
          </Card>
        ))
      )}
    </div>
  );
};
