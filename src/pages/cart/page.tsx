import { useEffect } from "react";

import { useGetServiceDataQuery } from "@/shared/api/baseApi";
import { mockProducts } from "@/shared/lib/mock-products";
import {
  AmountSelect,
  Button,
  Card,
  CardContent,
  Input,
  Label,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/ui";

import speed2 from "../../shared/assets/images/speed2.gif";

const BaseFormInput = ({
  fieldName,
  label,
  placeholder,
  type,
}: {
  fieldName: string;
  label: string;
  placeholder?: string;
  type?: string;
}) => {
  return (
    <div className="grid gap-2">
      <Label htmlFor={fieldName} className="font-mono">
        {label}
      </Label>
      <Input id={fieldName} placeholder={placeholder} className="font-mono" type={type} />
    </div>
  );
};

const CheckoutBlockCart = () => {
  return (
    <Card className="border-0 sm:border">
      {/* <Separator className="sm:hidden" /> */}
      <p className="text-xxl font-mono text-3xl font-bold w-full items-left sm:px-4 py-4">
        КОРЗИНА
      </p>
      <CardContent className="p-0 sm:p-4">
        <div className="grid gap-4">
          <div className="grid grid-cols-[64px_1fr_auto] items-center gap-4">
            <img src={mockProducts[0].src} alt="Product template" width={64} height={64} />
            <div>
              <h3 className="font-mono font-medium">ФУТБОЛКА СТРАШНАЯ</h3>
              <p className="font-mono text-sm text-muted-foreground">Color: Black, Size: M</p>
            </div>
            <AmountSelect />
          </div>

          <div className="grid grid-cols-[64px_1fr_auto] items-center gap-4">
            <img
              src={mockProducts[1].src}
              alt="Product template"
              width={64}
              height={64}
              className=""
            />
            <div>
              <h3 className="font-mono font-medium">ФУТБОЛКА ЖУТКАЯ</h3>
              <p className="font-mono text-sm text-muted-foreground">Color: White, Size: XL</p>
            </div>
            <AmountSelect />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const CheckoutBlockContacts = () => {
  return (
    <Card className="border-0 sm:border">
      <Separator className="sm:hidden" />
      <p className="text-xxl font-mono text-3xl font-bold w-full items-left sm:px-4 py-4">
        КОНТАКТНАЯ ИНФОРМАЦИЯ
      </p>
      <CardContent className="p-0 sm:p-4">
        <form className="grid gap-4">
          <BaseFormInput label="ФИО" fieldName="name" placeholder="ФИО" />
          <BaseFormInput label="МЫЛО" fieldName="email" placeholder="МЫЛО" />
          <BaseFormInput label="ТЕЛЕФОН" fieldName="phone" type="number" placeholder="ТЕЛЕФОН" />
        </form>
      </CardContent>
    </Card>
  );
};

const CheckoutBlockDelivery = () => {
  return (
    <div>
      {/* <Separator className="sm:hidden" /> */}
      <p className="text-xxl font-mono text-3xl font-bold w-full items-left pb-4">ДОСТАВКА</p>
      <Tabs defaultValue="delivery">
        <TabsList>
          <TabsTrigger value="delivery" className="w-full font-mono rounded-none p-0 h-full">
            ДОСТАВКА
          </TabsTrigger>
          <TabsTrigger value="pickup" className="w-full font-mono rounded-none p-0 h-full">
            САМОВЫВОЗ
          </TabsTrigger>
        </TabsList>

        <TabsContent value="delivery">
          <form className="grid gap-4">
            <BaseFormInput label="АДРЕС" fieldName="address" placeholder="АДРЕС" />
            <BaseFormInput label="ГОРОД" fieldName="city" placeholder="ГОРОД" />
            <BaseFormInput label="ОБЛАСТЬ" fieldName="state" placeholder="ОБЛАСТЬ" />
            <BaseFormInput label="ИНДЕКС" fieldName="zip" placeholder="ИНДЕКС" />
          </form>
        </TabsContent>

        <TabsContent value="pickup">
          <form className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="location" className="font-mono">
                МЕСТО САМОВЫВОЗА
              </Label>
              <Select>
                {/* text-primary affect placeholder and selected text*/}
                <SelectTrigger id="location">
                  <SelectValue
                    placeholder={<p className="text-muted-foreground">ВЫБЕРИТЕ ГДЕ</p>}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="location1">ПОТОМ УБЕРУ</SelectItem>
                  <SelectItem value="location2">ЭТОТ СЕЛЕКТ</SelectItem>
                  <SelectItem value="location3">Селекта вообще</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <BaseFormInput label="ДАТА САМОВЫВОЗА" fieldName="pickup" placeholder="Какого числа" />

            <div className="grid gap-2">
              <Label htmlFor="time" className="font-mono">
                ВРЕМЯ САМОВЫВОЗА
              </Label>
              <Select>
                <SelectTrigger id="time">
                  <SelectValue
                    placeholder={<p className="text-muted-foreground">ВЫБЕРИТЕ ВРЕМЯ</p>}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="9am">9:00 AM</SelectItem>
                  <SelectItem value="10am">10:00 AM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const CheckoutBlockPayment = () => {
  return (
    <Card className="border-0 sm:border">
      <p className="text-xxl font-mono text-3xl font-bold w-full items-left sm:px-4 py-4">
        СПОСОБ ОПЛАТЫ
      </p>
      <CardContent className="p-0 sm:p-4">
        <RadioGroup defaultValue="russian" className="grid gap-">
          <Label htmlFor="russian" className="flex font-mono items-center gap-2 cursor-pointer ">
            <RadioGroupItem id="russian" value="russian" />
            РОССИЙСКАЯ КАРТА
          </Label>

          <Label
            htmlFor="international"
            className="flex font-mono items-center gap-2 cursor-pointer"
          >
            <RadioGroupItem id="international" value="international" />
            МЕЖДУНАРОДНАЯ КАРТА
          </Label>
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

const CheckoutBlockTotal = () => {
  {
    /* ??? make top-16 as header and footer height variable */
  }
  return (
    <>
      <div className="sticky top-16 h-fit bg-background space-y-4 md:space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-mono font-medium">
            ИТАК..
            <br />
            ТВОЙ ЗАКАЗ
          </h2>
          <Button variant="outline">ИЗМЕНИТЬ</Button>
        </div>
        <div className="grid gap-2">
          <div className="flex justify-between font-mono">
            <span>ТОВАРЫ</span>
            <span>150 000 ₽</span>
          </div>
          <div className="flex justify-between font-mono">
            <span>ДОСТАВКА</span>
            <span>400 ₽</span>
          </div>
          <Separator />
          <div className="flex justify-between font-medium font-mono">
            <span>ИТОГО</span>
            <span>5700 ₽</span>
          </div>
        </div>
        <div className="relative group">
          {/* group-hover:visible */}
          <img src={speed2} alt="Speed gif" className="absolute invisible -top-24 left-0 " />
          <Button size="lg" className="w-full" disabled>
            ОПЛАТИТЬ
          </Button>
        </div>
      </div>
    </>
  );
};

export const CartPage = () => {
  const { data, error, isLoading } = useGetServiceDataQuery();

  // useEffect(() => {
  //   new window.CDEKWidget({
  //     from: "Новосибирск",
  //     root: "cdek-map",
  //     apiKey: "yandex-api-key",
  //     servicePath: "../../entities/test/lib/service.php",
  //     defaultLocation: "Новосибирск",
  //   });
  // });

  return (
    // <div className="grid md:grid-cols-[1fr_320px] gap-8 max-w-6xl mx-auto py-12 px-4 md:px-0">
    <div className="grid md:grid-cols-[1fr_450px] gap-8 py-4 px-2">
      <div className="grid gap-8">
        Endpoint data: {data}
        <CheckoutBlockCart />
        <CheckoutBlockContacts />
        <CheckoutBlockDelivery />
        <CheckoutBlockPayment />
      </div>
      <CheckoutBlockTotal />
    </div>
  );
};
