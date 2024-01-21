import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300;400;500;600;700;800&family=Inter:wght@300;400;600;700&display=swap');
body {
  font-family: 'Darker Grotesque', sans-serif;
    background: #303030;  
}
  
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);
