import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/common/Layout";
import { Welcome } from "./components/home/Welcome";
import TypingContainer from "./components/test/TypingContainer";

const App = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Welcome />} />
      <Route path="/test" element={<TypingContainer />} />
    </Route>
  </Routes>
);

export default App;
