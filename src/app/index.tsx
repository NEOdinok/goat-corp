import { Provider as ModalProvider } from "@ebay/nice-modal-react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import { ThemeProvider } from "@/widgets/ThemeProvider";

import "@/shared/index.css";

// import { ThemeProvider } from '@/entities/theme'
import { appRouter } from "./appRouter";
import { appStore, persistedStore } from "./appStore";

const root = document.getElementById("root") as HTMLElement;

async function initApp() {
  // Move @mswjs worker to lazy import
  console.log("init app");
  // const module = await import('@/app/apiMockWorker')
  // await module.startApiMockWorker()
}

initApp().then(() => {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <ModalProvider>
        <ReduxProvider store={appStore}>
          <PersistGate loading={null} persistor={persistedStore}>
            {/* <ThemeProvider> */}
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
              <RouterProvider router={appRouter()} />
            </ThemeProvider>
            {/* </ThemeProvider> */}
          </PersistGate>
        </ReduxProvider>
      </ModalProvider>
    </React.StrictMode>,
  );
});
