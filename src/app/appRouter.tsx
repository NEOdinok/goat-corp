import { BaseLayout } from "@/layouts/BaseLayout";
import { EmptyLayout } from "@/layouts/EmptyLayout";
import { createBrowserRouter } from "react-router-dom";

import { AboutPage } from "@/pages/about";
import { CartPage } from "@/pages/cart";
import { HomePage } from "@/pages/home";
import { ProductPage } from "@/pages/product";
import { ShopPage } from "@/pages/shop";

export const appRouter = () =>
  createBrowserRouter([
    {
      element: EmptyLayout,
      errorElement: <div>Error</div>,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
      ],
    },
    {
      element: BaseLayout,
      errorElement: <div>Error</div>,
      children: [
        {
          path: "/shop",
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
      errorElement: <div>Error</div>,
      children: [
        {
          path: "/cart",
          element: <CartPage />,
        },
      ],
    },
    {
      element: BaseLayout,
      errorElement: <div>Error</div>,
      children: [
        {
          path: "/about",
          element: <AboutPage />,
        },
      ],
    },
  ]);
