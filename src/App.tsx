import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/common/Layout";

const Welcome = lazy(() => import("./pages/home/Welcome"));
const TestPage = lazy(() => import("./pages/test"));

const App = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route
        path="/"
        element={
          <Suspense fallback="Loading...">
            <Welcome />
          </Suspense>
        }
      />
      <Route
        path="/test"
        element={
          <Suspense fallback="Loading...">
            <TestPage />
          </Suspense>
        }
      />
    </Route>
  </Routes>
);

export default App;
