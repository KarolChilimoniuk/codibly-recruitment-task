import { QueryClientProvider } from "react-query";
import queryClient from "./services/queryClient";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/Home";
import "./App.css";

const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
