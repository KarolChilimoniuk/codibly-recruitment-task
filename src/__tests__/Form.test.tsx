import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import { render, screen } from "@testing-library/react";
import Form from "../components/Form/Form";

describe("Form layout tests", () => {
  test("Form component rendering test", () => {
    const formComponent = render(
      <Provider store={store}>
        <Router>
          <Form />
        </Router>
      </Provider>
    );
    console.debug(formComponent);
    expect(screen.getByText("Search")).toBeInTheDocument();
  });
});
