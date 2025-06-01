const TodoItem = ({ todo, markAsCompleted }) => {
  return (
    <li
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
        cursor: "pointer",
      }}
      onClick={markAsCompleted}
    >
      {todo.text}
    </li>
  );
};

export default TodoItem;
