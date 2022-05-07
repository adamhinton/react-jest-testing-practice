import { render, screen, cleanup } from "@testing-library/react";
import Todo from "../Todo";

test("should render todo component", () => {
  render(<Todo />);
});
