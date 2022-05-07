const Todo = (props) => {
  const { id, title, completed } = props.todo;

  return <div data-testid="todo-1">{title}</div>;
};

export default Todo;
