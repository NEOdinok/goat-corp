import { Link } from "react-router-dom";

import { RootState } from "@/app/appStore";

import { LayoutFooter } from "@/widgets/HomeLayoutFooter";
import { LayoutHeader } from "@/widgets/LayoutHeader";

import { closeSidebar, openSidebar } from "@/entities/test/model/slice";

import { useAppDispatch, useAppSelector } from "@/shared/model";
import { Layout } from "@/shared/ui";

const HeaderNavigation = () => {
  const dispatch = useAppDispatch();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === "Escape" || event.key === " ") {
      dispatch(closeSidebar());
    }
  };

  return (
    <>
      <div className="hidden sm:flex gap-4">
        <Link to="/" className="font-mono hover:cursor-pointer hover:underline hover:text-primary">
          ГЛАВНАЯ
        </Link>
        <Link
          to="/shop"
          className="font-mono hover:cursor-pointer hover:underline hover:text-primary"
        >
          МАГАЗИН
        </Link>
        <Link
          to="/about"
          className="font-mono hover:cursor-pointer hover:underline hover:text-primary"
        >
          ЧТО ЭТО?
        </Link>
      </div>
      <div
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        className="sm:hidden text-2xl text-primary hover:cursor-pointer hover:underline font-mono"
        onClick={() => dispatch(openSidebar())}
      >
        МЕНЮ
      </div>
    </>
  );
};

const HeaderRight = (
  <div className="gap-4 flex items-center">
    <div className="hidden sm:flex lang-switch font-mono gap-1 cursor-pointer">
      <p className="font-mono text-primary">РУ</p>/<p className="font-mono">EN</p>
    </div>

    <Link
      to="/cart"
      className="font-mono text-primary hover:cursor-pointer hover:underline hover:text-primary sm:text-foreground text-2xl sm:text-base"
    >
      КОРЗИНА(0)
    </Link>
  </div>
);

const FooterLeft = (
  <div className="flex gap-4">
    <Link
      to="https://www.instagram.com/goat__corp/?hl=en"
      target="_blank"
      className="font-mono hover:cursor-pointer hover:underline hover:text-primary"
    >
      INSTAGRAM
    </Link>
    <Link
      to="https://www.youtube.com/@goat7480"
      target="_blank"
      className="font-mono hover:cursor-pointer hover:underline hover:text-primary"
    >
      YOUTUBE
    </Link>
  </div>
);

const FooterRight = (
  <div className="flex gap-4">
    <p className="font-mono hover:cursor-pointer hover:underline hover:text-primary">
      ©2024 ГОАТ.КОРП
    </p>
  </div>
);

const Sidebar = () => {
  const isSidebarOpen = useAppSelector((state: RootState) => state.test?.isSidebarOpen);
  const dispatch = useAppDispatch();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === "Escape" || event.key === " ") {
      dispatch(closeSidebar());
    }
  };

  return (
    <div
      className="flex flex-col h-full gap-4 p-4 bg-background fixed z-[100] top-0 right-0 bottom-0 w-full overflow-y-auto"
      style={{ display: isSidebarOpen ? "block" : "none" }}
      onClick={() => dispatch(closeSidebar())}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <p className="font-mono text-2xl">Item 1</p>
      <p className="font-mono text-2xl">Item 2</p>
    </div>
  );
};

export const BaseLayout = (
  <Layout
    headerSlot={
      <LayoutHeader leftContentSlot={<HeaderNavigation />} rightContentSlot={HeaderRight} />
    }
    bottomSlot={<LayoutFooter rightContentSlot={FooterRight} leftContentSlot={FooterLeft} />}
    sidebarSlot={<Sidebar />}
  />
);
