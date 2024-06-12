import { LayoutFooter } from "@/widgets/HomeLayoutFooter";
import { LayoutHeader } from "@/widgets/LayoutHeader";

import { Layout } from "@/shared/ui";
import { LangToggle } from "@/shared/ui/LangToggle";

export const BaseLayout = (
  <Layout
    headerSlot={
      <LayoutHeader rightContentSlot={<LangToggle />} leftContentSlot={<span>МАГАЗИН</span>} />
    }
    bottomSlot={
      <LayoutFooter
        rightContentSlot={<span>©2024 ГОАТ.КОРП</span>}
        leftContentSlot={<span>ИНСТАГРАМ</span>}
      />
    }
  />
);
