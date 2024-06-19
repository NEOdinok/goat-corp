import { Link, useNavigate } from "react-router-dom";

import { RootState } from "@/app/appStore";

import { LayoutFooter } from "@/widgets/HomeLayoutFooter";
import { LayoutHeader } from "@/widgets/LayoutHeader";

import { closeSidebar, openSidebar } from "@/entities/test/model/slice";

import { IconXClose } from "@/shared/assets/icons";
import { cn } from "@/shared/lib";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { Button, Layout } from "@/shared/ui";

const HeaderNavigation = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="hidden sm:flex gap-4">
        <Link
          to="/"
          onClick={() => dispatch(closeSidebar())}
          className="font-mono hover:cursor-pointer hover:underline hover:text-primary"
        >
          ГЛАВНАЯ
        </Link>
        <Link
          to="/shop"
          onClick={() => dispatch(closeSidebar())}
          className="font-mono hover:cursor-pointer hover:underline hover:text-primary"
        >
          МАГАЗИН
        </Link>
        <Link
          to="/about"
          onClick={() => closeSidebar()}
          className="font-mono hover:cursor-pointer hover:underline hover:text-primary"
        >
          ЧТО ЭТО?
        </Link>
      </div>
      <Button
        className="sm:hidden text-2xl text-primary hover:cursor-pointer hover:underline font-mono"
        onClick={() => dispatch(openSidebar())}
        variant="link"
        size="fit"
      >
        МЕНЮ
      </Button>
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
      className="font-mono text-primary font-medium hover:cursor-pointer hover:underline hover:text-primary sm:text-foreground text-2xl sm:text-base"
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
  const navigate = useNavigate();

  const handleLinkClick = (path: string) => {
    dispatch(closeSidebar());
    navigate(path);
  };

  return (
    <div
      className={cn(
        "flex-col justify-between h-full p-4 top-0 right-0 bottom-0 fixed z-[10] w-full bg-background overflow-y-auto",
        isSidebarOpen ? "flex sm:hidden" : "hidden",
      )}
    >
      <div className="flex flex-col gap-4">
        <Button variant="ghost" size="fit" onClick={() => handleLinkClick("/")}>
          <p className="font-mono font-bold text-3xl hover:underline-offset-1"> ГЛАВНАЯ</p>
        </Button>

        <Button variant="ghost" size="fit" onClick={() => handleLinkClick("/shop")}>
          <p className="font-mono font-bold text-3xl hover:underline-offset-1"> МАГАЗИН</p>
        </Button>

        <Button variant="ghost" size="fit" onClick={() => handleLinkClick("/about")}>
          <p className="font-mono font-bold text-3xl hover:underline-offset-1">ЧТО ЭТО?</p>
        </Button>
      </div>

      <div className="flex w-full justify-end">
        <Button variant="ghost" size="icon" onClick={() => dispatch(closeSidebar())}>
          <IconXClose />
        </Button>
      </div>
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
