import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import { render, screen } from "@testing-library/react";
import Home from "../Pages/Home/Home";

describe("Home layout tests", () => {
  test("Home component rendering test", () => {
    const homeComponent = render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>
    );
    console.debug(homeComponent);
    expect(screen.getByText("Codibly recruitment task")).toBeInTheDocument();
  });
});
