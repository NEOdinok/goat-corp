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

export const CartPage = () => {
  return (
    // <div className="grid md:grid-cols-[1fr_320px] gap-8 max-w-6xl mx-auto py-12 px-4 md:px-0">
    <div className="grid md:grid-cols-[1fr_450px] gap-8 py-4 px-2">
      <div className="grid gap-8">
        <Card>
          {/* <CardHeader>
            <CardTitle>КОРЗИНА</CardTitle>
          </CardHeader> */}
          <p className="text-xxl font-mono text-3xl font-bold w-full items-left px-4 py-4">
            КОРЗИНА
          </p>
          <CardContent>
            <div className="grid gap-4">
              {/* Cart card */}
              <div className="grid grid-cols-[64px_1fr_auto] items-center gap-4">
                <img src={mockProducts[0].src} alt="Product template" width={64} height={64} />
                <div>
                  <h3 className="font-mono font-medium">ФУТБОЛКА СТРАШНАЯ</h3>
                  <p className="font-mono text-sm text-muted-foreground">Color: Black, Size: M</p>
                </div>
                <AmountSelect />
              </div>

              {/* Cart card */}
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

        <Card>
          <p className="text-xxl font-mono text-3xl font-bold w-full items-left px-4 py-4">
            КОНТАКТНАЯ ИНФОРМАЦИЯ
          </p>
          {/* <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader> */}
          <CardContent>
            <form className="grid gap-4">
              <BaseFormInput label="ФИО" fieldName="name" placeholder="ФИО" />
              <BaseFormInput label="МЫЛО" fieldName="email" placeholder="МЫЛО" />
              <BaseFormInput
                label="ТЕЛЕФОН"
                fieldName="phone"
                type="number"
                placeholder="ТЕЛЕФОН"
              />
            </form>
          </CardContent>
        </Card>

        <div>
          {/* <CardHeader>
            <CardTitle>Delivery Method</CardTitle>
          </CardHeader> */}
          <p className="text-xxl font-mono text-3xl font-bold w-full items-left py-4">ДОСТАВКА</p>
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
                      <SelectItem value="location1">Наверное тут</SelectItem>
                      <SelectItem value="location2">Не будет</SelectItem>
                      <SelectItem value="location3">Селекта вообще</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {/* <div className="grid gap-2">
                    <Label htmlFor="date">Pickup Date</Label>
                    <Input id="date" type="date" />
                  </div> */}
                <BaseFormInput
                  label="ДАТА САМОВЫВОЗА"
                  fieldName="pickup"
                  placeholder="Какого числа"
                />

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
                      <SelectItem value="11am">11:00 AM</SelectItem>
                      <SelectItem value="12pm">12:00 PM</SelectItem>
                      <SelectItem value="1pm">1:00 PM</SelectItem>
                      <SelectItem value="2pm">2:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </div>

        <Card>
          {/* <CardHeader>
            <CardTitle></CardTitle>
          </CardHeader> */}

          <p className="text-xxl font-mono text-3xl font-bold w-full items-left px-4 py-4">
            СПОСОБ ОПЛАТЫ
          </p>
          <CardContent>
            <RadioGroup defaultValue="russian" className="grid gap-4">
              <Label
                htmlFor="russian"
                className="flex font-mono items-center gap-2 cursor-pointer [&:has([data-state=checked])]:text-gray-900 dark:[&:has([data-state=checked])]:text-gray-50"
              >
                <RadioGroupItem id="russian" value="russian" />
                РОССИЙСКАЯ КАРТА
              </Label>
              <Label
                htmlFor="international"
                className="flex font-mono items-center gap-2 cursor-pointer [&:has([data-state=checked])]:text-gray-900 dark:[&:has([data-state=checked])]:text-gray-50"
              >
                <RadioGroupItem id="international" value="international" />
                МЕЖДУНАРОДНАЯ КАРТА
              </Label>
            </RadioGroup>

            {/* <form className="grid gap-4 mt-4">
              <div className="grid gap-2">
                <Label htmlFor="card-number">Card Number</Label>
                <Input id="card-number" placeholder="Enter your card number" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="expiry-date">Expiry Date</Label>
                  <Input id="expiry-date" placeholder="MM/YY" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="CVC" />
                </div>
              </div>
            </form> */}
          </CardContent>
        </Card>
      </div>

      <div className="sticky top-0 h-fit bg-background space-y-4 md:space-y-6">
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
    </div>
  );
};

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
