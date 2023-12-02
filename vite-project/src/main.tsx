import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import {
  createTheme,
  alpha,
  getContrastRatio,
  ThemeProvider,
} from "@mui/material/styles";

import Home from "./pages/Home";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const GlobalStyle = createGlobalStyle`

`;

// Augment the palette to include a violet color
declare module "@mui/material/styles" {
  interface Palette {
    black: Palette["primary"];
  }

  interface PaletteOptions {
    black?: PaletteOptions["primary"];
  }
}

// Update the Button's color options to include a violet option
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    black: true;
  }
}

const violetBase = "#212121";
const violetMain = alpha(violetBase, 0.9);

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
      light: alpha(violetBase, 0.5),
      dark: alpha(violetBase, 0.9),
      contrastText:
        getContrastRatio(violetMain, "#fff") > 4.5 ? "#fff" : "#111",
    },
    secondary: {
      main: "#212121",
    },
    black: {
      main: violetMain,
      light: alpha(violetBase, 0.5),
      dark: alpha(violetBase, 0.9),
      contrastText:
        getContrastRatio(violetMain, "#fff") > 4.5 ? "#fff" : "#111",
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
