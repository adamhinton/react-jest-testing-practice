import { render, screen, cleanup } from "@testing-library/react";
import Todo from "../Todo";
import renderer from "react-test-renderer";

afterEach(() => {
  cleanup();
});

test("[1] should render non-completed Todo component", () => {
  const todo = { id: 1, title: "wash dishes", completed: false };

  render(<Todo todo={todo} />);

  const todoElement = screen.getByTestId("todo-1");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("wash dishes");
  expect(todoElement).not.toContainHTML("<strike>");
});

test("[2] should render non-completed Tocdo component", () => {
  const todo = { id: 2, title: "wash car", completed: true };

  render(<Todo todo={todo} />);

  const todoElement = screen.getByTestId("todo-2");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("wash car");
});

test("matches snapshot", () => {
  const todo = { id: 1, title: "wash dishes", completed: false };
  const tree = renderer.create(<Todo todo={todo} />).toJSON();
});
