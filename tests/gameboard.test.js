import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Gameboard from "../src/components/Gameboard";

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
let container;
it("CheckboxWithLabel changes the text after click", () => {
  act(() => {
    ReactDOM.render(<Gameboard />, container);
  });

  const h1 = container.querySelector("h1");

  expect(h1.tezt).toBe("Tic-Tac-Toe!");
});
