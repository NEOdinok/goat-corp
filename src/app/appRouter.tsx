// import { type ReactElement } from "react";
import { BaseLayout } from "@/layouts/BaseLayout";
import { createBrowserRouter } from "react-router-dom";

// import { LayoutBase } from "@/layouts/BaseLayout";
import { HomePage } from "@/pages/home";
import { ShopPage } from "@/pages/shop";

export const appRouter = () =>
  createBrowserRouter([
    {
      element: BaseLayout,
      errorElement: <div>error</div>,
      loader: async () => {
        console.log("[appRouter] `/` async loader");
      },
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
      loader: async () => {
        console.log("[appRouter] `/shop` async loader");
      },
      children: [
        {
          path: "/shop",
          element: <ShopPage />,
        },
      ],
    },
  ]);
