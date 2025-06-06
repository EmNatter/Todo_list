import React, { useState } from "react";

const TodoForm = ({ addTodo, deleteList }) => {
  const [todoText, setTodoText] = useState("");

  const handleInputChange = (event) => {
    setTodoText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todoText.trim()) {
      addTodo(todoText);
      setTodoText("");
    }
  };

  return (
    <form className="todoform" onSubmit={handleSubmit}>
      <input
        type="text"
        id="todo-input"
        name="todo"
        value={todoText}
        onChange={handleInputChange}
        placeholder="Skriv in en ny todo"
      />

      <button type="submit" className="addButton">
        Lägg till
      </button>
      <button
        type="button"
        onClick={deleteList}
        className="deleteButton"
        aria-label="Radera lista"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="24"
          height="24"
          viewBox="0 0 64 64"
        >
          <path d="M 28 3 C 25.791 3 24 4.791 24 7 L 24 9 L 23.599609 9 L 7 11 L 7 14 L 57 14 L 57 11 L 40.400391 9 L 40 9 L 40 7 C 40 4.791 38.209 3 36 3 L 28 3 z M 28 7 L 36 7 L 36 9 L 28 9 L 28 7 z M 10 16 L 14 58 L 50 58 L 53.923828 17 L 10 16 z M 32 23 C 33.333 23 34 24 34 24 L 34 53 L 30 53 L 30 24 C 30 24 30.667 23 32 23 z M 18.976562 23.070312 C 20.306563 22.977313 21.042969 23.929688 21.042969 23.929688 L 23.007812 53 L 18.996094 53 L 17.052734 24.207031 C 17.052734 24.207031 17.646563 23.163313 18.976562 23.070312 z M 44.978516 23.070312 C 46.308516 23.163312 46.904297 24.207031 46.904297 24.207031 L 44.960938 53 L 40.949219 53 L 42.914062 23.929688 C 42.914062 23.929688 43.648516 22.977312 44.978516 23.070312 z"></path>
        </svg>
      </button>
    </form>
  );
};

export default TodoForm;
