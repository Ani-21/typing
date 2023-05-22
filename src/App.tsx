import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/common/Layout";
import { Loader } from "./components/common/Loader";

const WelcomePage = lazy(() => import("./pages/home"));
const TestPage = lazy(() => import("./pages/test"));

export const App = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loader />}>
            <WelcomePage />
          </Suspense>
        }
      />
      <Route
        path="/test"
        element={
          <Suspense fallback={<Loader />}>
            <TestPage />
          </Suspense>
        }
      />
    </Route>
  </Routes>
);
