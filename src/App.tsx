import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/Home";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import "./App.css";

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
