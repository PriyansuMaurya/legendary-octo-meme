import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Route, BrowserRouter as Routes, useRoutes } from "react-router-dom";
import BlenderWorks from "./components/BlenderWork";
const root = ReactDOM.createRoot(document.getElementById("root"));

const RoutedApp = () => {
  const routes = useRoutes([
    { path: "/", element: <App /> },
    { path: "/blender", element: <BlenderWorks /> },
  ]);

  return routes;
};

root.render(
  <Routes>
    <RoutedApp/>
  </Routes>
);
