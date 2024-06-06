// import { featureToggleLoader } from '@/entities/featureToggle'
// import { appStore } from './appStore'
import { BaseLayout } from "@/layouts/BaseLayout";
import { createBrowserRouter } from "react-router-dom";

import { HomePage } from "@/pages/home";

export const appRouter = () =>
  createBrowserRouter([
    {
      element: BaseLayout,
      errorElement: <div>error</div>,
      children: [
        {
          path: "/shop",
          element: <>test text</>,
        },
        {
          path: "/shop/cart",
          element: <HomePage />,
        },
        {
          path: "/shop/:productId",
          element: <HomePage />,
        },
      ],
    },
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
  ]);
