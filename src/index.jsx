import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, BrowserRouter as Routes, useRoutes } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import App from "./pages/App";
import BlenderWork from "./pages/BlenderWork";
const root = ReactDOM.createRoot(document.getElementById("root"));

const RoutedApp = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <App />
      ),
    },
    {
      path: "/blender",
      element: (

        <BlenderWork />
      ),
    },
  ]);

  return routes;
};

root.render(
  <NextUIProvider>
    <Routes>
      <RoutedApp />
    </Routes>
  </NextUIProvider>
);
