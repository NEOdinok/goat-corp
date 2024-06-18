import { Link } from "react-router-dom";

import { LayoutFooter } from "@/widgets/HomeLayoutFooter";
import { LayoutHeader } from "@/widgets/LayoutHeader";

import { Layout } from "@/shared/ui";

const HeaderNavigation = (
  <div className="flex gap-4">
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

const HeaderRight = (
  <div className="flex gap-4">
    <div className="lang-switch font-mono flex gap-1 cursor-pointer">
      <p className="font-mono text-primary">РУ</p>/<p className="font-mono">EN</p>
    </div>

    <Link to="/cart" className="font-mono hover:cursor-pointer hover:underline hover:text-primary">
      КОРЗИНА(0)
    </Link>
  </div>
);

const FooterLeft = (
  <div className="flex gap-4">
    <p className="font-mono hover:cursor-pointer hover:underline hover:text-primary">INSTAGRAM</p>
    <p className="font-mono hover:cursor-pointer hover:underline hover:text-primary">YOUTUBE</p>
  </div>
);

const FooterRight = (
  <div className="flex gap-4">
    <p className="font-mono hover:cursor-pointer hover:underline hover:text-primary">
      ©2024 ГОАТ.КОРП
    </p>
  </div>
);

export const BaseLayout = (
  <Layout
    headerSlot={<LayoutHeader leftContentSlot={HeaderNavigation} rightContentSlot={HeaderRight} />}
    bottomSlot={<LayoutFooter rightContentSlot={FooterRight} leftContentSlot={FooterLeft} />}
  />
);
