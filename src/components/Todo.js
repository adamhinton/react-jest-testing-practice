const Todo = (props) => {
  const { id, title, completed } = props.todo;

  const h1 = <h1>{title}</h1>;
  const text = completed ? <strike>{h1}</strike> : h1;

  return <div data-testid="todo-1">{title}</div>;
};

export default Todo;
