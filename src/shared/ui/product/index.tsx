import {
  Button,
  Info,
  Label,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui";

import { Gallery } from "../gallery";

export const Product = () => {
  return (
    // max-w-6xl mx-auto
    <div className="grid md:grid-cols-[400px_1fr] gap-8 px-4">
      <div className="flex flex-col gap-8 sm:order-first ">
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl font-mono font-bold">GOAT [RED SPRING 2022] НАЗВАНИЕ КРУПНО..</h1>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-mono">150 000 ₽</span>
          </div>
        </div>
        <div className="grid gap-4 text-xs leading-loose">
          <Info content={content} />
        </div>
        <div className="grid gap-4">
          <div className="flex flex-col items-center gap-2 w-full">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Размер" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="XL">XL</SelectItem>
                <SelectItem value="L">L</SelectItem>
                <SelectItem value="M">M</SelectItem>
                <SelectItem value="S">S</SelectItem>
              </SelectContent>
            </Select>
            <Button className="w-full" variant="outline" size="sm">
              ДОБАВИТЬ В КОРЗИНУ
            </Button>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="size" className="text-base">
              Size
            </Label>
            <RadioGroup id="size" defaultValue="m" className="flex items-center gap-2">
              <Label
                htmlFor="size-s"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
              >
                <RadioGroupItem id="size-s" value="s" />S
              </Label>
              <Label
                htmlFor="size-m"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
              >
                <RadioGroupItem id="size-m" value="m" />M
              </Label>
              <Label
                htmlFor="size-l"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
              >
                <RadioGroupItem id="size-l" value="l" />L
              </Label>
            </RadioGroup>
          </div>
        </div>
      </div>
      <div className="flex xs-order-first flex-col h-fit gap-4">
        <Gallery />
      </div>
    </div>
  );
};

const content = (
  <p className="font-mono">
    Immerse yourself in your favorite music, podcasts, or audiobooks with the Acme Wireless
    Headphones. Featuring high-fidelity drivers and advanced noise-cancelling technology, you'll
    experience a truly immersive listening experience, free from distractions. The ergonomic design
    and soft, adjustable earcups ensure all-day comfort, making these headphones the perfect choice
    for extended listening sessions.
  </p>
);
