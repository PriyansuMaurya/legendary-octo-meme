import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { SplashScreen } from "./pages/SplashScreen";
import { Route, BrowserRouter as Routes, useRoutes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const LazyApp = React.lazy(() => fakeDelay(1500)(import("./pages/App")));
const LazyBlenderWorks = React.lazy(() =>
  fakeDelay(2000)(import("./pages/BlenderWork"))
);

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
        <React.Suspense fallback={<SplashScreen />}>
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
  <Routes>
    <RoutedApp />
  </Routes>
);

