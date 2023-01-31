import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Main container tests", () => {
  test("App Component rendering test", () => {
    const appContainer = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
    expect(screen.getByText("Codibly recruitment task")).toBeInTheDocument();
  });
});
