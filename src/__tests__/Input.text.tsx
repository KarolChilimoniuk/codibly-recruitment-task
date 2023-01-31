import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import { render, screen } from "@testing-library/react";
import TextInput from "../components/TextInput/TextInput";

describe("Text input layout tests", () => {
  test("Text input component rendering test", () => {
    const inputComponent = render(
      <Provider store={store}>
        <Router>
          <TextInput
            inputFilterValueHandler={() =>
              console.log("inputFilterValueHandler")
            }
          />
        </Router>
      </Provider>
    );
    console.debug(inputComponent);
    expect(screen.getByLabelText("Search item by id")).toBeInTheDocument();
  });
});
