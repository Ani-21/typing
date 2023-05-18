import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/common/Layout";
import { Welcome } from "./components/home/Welcome";
import TestPage from "./components/test";

const App = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Welcome />} />
      <Route path="/test" element={<TestPage />} />
    </Route>
  </Routes>
);

export default App;
