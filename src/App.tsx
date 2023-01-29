import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/Home";
import "./App.css";

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default App;
