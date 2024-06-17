import { Link } from "react-router-dom";

import { LayoutFooter } from "@/widgets/HomeLayoutFooter";
import { LayoutHeader } from "@/widgets/LayoutHeader";

import { Layout } from "@/shared/ui";

const NavMenu = (
  <div className="flex gap-4">
    {/* hover:cursor-pointer hover:underline */}
    <Link to="/" className="font-mono hover:cursor-pointer hover:underline hover:text-primary">
      ГЛАВНАЯ
    </Link>
    <Link to="/shop" className="font-mono hover:cursor-pointer hover:underline hover:text-primary">
      МАГАЗИН
    </Link>
    <Link to="/about" className="font-mono hover:cursor-pointer hover:underline hover:text-primary">
      ЧТО ЭТО?
    </Link>
  </div>
);

export const BaseLayout = (
  <Layout
    headerSlot={<LayoutHeader rightContentSlot={<span>EN / РУ </span>} leftContentSlot={NavMenu} />}
    bottomSlot={
      <LayoutFooter
        rightContentSlot={<span>©2024 ГОАТ.КОРП</span>}
        leftContentSlot={<span>ИНСТАГРАМ</span>}
      />
    }
  />
);
