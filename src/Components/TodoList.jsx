import TodoItem from "./TodoItem";

const TodoList = ({ todos, markAsCompleted }) => {
  return (
    <ul className="todoList">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          markAsCompleted={() => markAsCompleted(index)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
