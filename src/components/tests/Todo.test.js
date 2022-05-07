import { render, screen, cleanup } from "@testing-library/react";
import Todo from "../Todo";

afterEach(() => {
  cleanup();
});

test("[1] should render non-completed Todo component", () => {
  const todo = { id: 1, title: "wash dishes", completed: false };

  render(<Todo todo={todo} />);

  const todoElement = screen.getByTestId("todo-1");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("wash dishes");
});

test("[2] should render non-completed Todo component", () => {
  const todo = { id: 2, title: "wash car", completed: true };

  render(<Todo todo={todo} />);

  const todoElement = screen.getByTestId("todo-2");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("wash car");
});
