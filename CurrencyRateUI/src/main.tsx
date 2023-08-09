import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CurrenciesProvider } from "./context/currencies.tsx";
import { DetailsProvider } from "./context/details.tsx";
import { SelectedCurrenciesProvider } from "./context/selectedCurrencies.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SelectedCurrenciesProvider>
      <CurrenciesProvider>
        <DetailsProvider>
          <CssBaseline />
          <App />
        </DetailsProvider>
      </CurrenciesProvider>
    </SelectedCurrenciesProvider>
  </React.StrictMode>
);
