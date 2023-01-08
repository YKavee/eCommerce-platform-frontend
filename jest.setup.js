import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";

afterEach(() => {
  // unmounts React trees that were mounted with render
  cleanup();
});
