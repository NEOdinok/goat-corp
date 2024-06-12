import { LayoutFooter } from "@/widgets/HomeLayoutFooter";
import { LayoutHeader } from "@/widgets/LayoutHeader";

import { Layout } from "@/shared/ui";

export const BaseLayout = (
  <Layout
    headerSlot={
      <LayoutHeader
        rightContentSlot={<span>EN / РУ </span>}
        leftContentSlot={<span>МАГАЗИН</span>}
      />
    }
    bottomSlot={
      <LayoutFooter
        rightContentSlot={<span>©2024 ГОАТ.КОРП</span>}
        leftContentSlot={<span>ИНСТАГРАМ</span>}
      />
    }
  />
);
