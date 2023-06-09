import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { SplashScreen } from "./pages/SplashScreen";
import { Route, BrowserRouter as Routes, useRoutes } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
// import App from "./pages/App";
// import BlenderWork from "./pages/BlenderWork";
const root = ReactDOM.createRoot(document.getElementById("root"));

const LazyApp = React.lazy(() => fakeDelay(3100)(import("./pages/App")));
const LazyBlenderWorks = React.lazy(() => import("./pages/BlenderWork"));

// add some async delay for illustration purposes
function fakeDelay(ms) {
  return (promise) =>
    promise.then(
      (data) =>
        new Promise((resolve) => {
          setTimeout(() => resolve(data), ms);
        })
    );
}
const RoutedApp = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <React.Suspense fallback={<SplashScreen animationId="splash-text" />}>
          <LazyApp />
        </React.Suspense>
      ),
    },
    {
      path: "/blender",
      element: (
        <React.Suspense fallback={<SplashScreen />}>
          <LazyBlenderWorks />
        </React.Suspense>
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
