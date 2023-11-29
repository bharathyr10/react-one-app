import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import "./translations/i18n";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./themes/default";
import App from "./App";
import { store } from "./app/store";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <I18nextProvider i18n={i18next}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </I18nextProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
