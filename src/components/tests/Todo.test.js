import { render, screen, cleanup } from "@testing-library/react";
import Todo from "../Todo";

test("should render non-completed Todo component", () => {
  const todo = { id: 1, title: "wash dishes", completed: false };

  render(<Todo todo={todo} />);

  const todoElement = screen.getByTestId("todo-1");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("wash dishes");
});
