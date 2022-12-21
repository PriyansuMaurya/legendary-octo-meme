import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Route, BrowserRouter as Routes, useRoutes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
