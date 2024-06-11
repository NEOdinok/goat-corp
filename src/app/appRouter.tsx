// import { featureToggleLoader } from '@/entities/featureToggle'
// import { appStore } from './appStore'
import { BaseLayout } from "@/layouts/BaseLayout";
import { createBrowserRouter } from "react-router-dom";

import { AboutPage } from "@/pages/about";
import { HomePage } from "@/pages/home";
import { ShopPage } from "@/pages/shop";

export const appRouter = () =>
  createBrowserRouter([
    {
      element: BaseLayout,
      errorElement: <div>error</div>,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
      ],
    },
    {
      element: BaseLayout,
      errorElement: <div>error</div>,
      children: [
        {
          path: "/shop",
          element: <ShopPage />,
        },
        {
          path: "/shop/cart",
          element: <ShopPage />,
        },
        {
          path: "/shop/:productId",
          element: <ShopPage />,
        },
      ],
    },
    {
      element: BaseLayout,
      errorElement: <div>error</div>,
      children: [
        {
          path: "/about",
          element: <AboutPage />,
        },
      ],
    },
  ]);
