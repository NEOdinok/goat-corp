import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { appStore, persistedStore } from "@/app/appStore";
import { PersistGate } from "redux-persist/integration/react";

import { App } from "@/app";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ReduxProvider store={appStore}>
      <PersistGate loading={null} persistor={persistedStore}>
        <App />
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>
);
