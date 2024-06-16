// import { featureToggleLoader } from '@/entities/featureToggle'
// import { appStore } from './appStore'
import { BaseLayout } from "@/layouts/BaseLayout";
import { EmptyLayout } from "@/layouts/EmptyLayout";
import { createBrowserRouter } from "react-router-dom";

import { AboutPage } from "@/pages/about";
import { HomePage } from "@/pages/home";
import { ProductPage } from "@/pages/product";
import { ShopPage } from "@/pages/shop";

export const appRouter = () =>
  createBrowserRouter([
    {
      element: EmptyLayout,
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
          element: <ProductPage />,
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
