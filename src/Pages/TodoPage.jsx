import React, { useState, useEffect } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const addTodo = (todoText) => {
    const newTodo = {
      text: todoText,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const markAsCompleted = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = true;
    setTodos(updatedTodos);
  };

  const sortTodos = todos.sort((a, b) =>
    a.completed === b.completed ? 0 : a.completed ? 1 : -1
  );

  const allCompleted =
    todos.length > 0 && todos.every((todo) => todo.completed);

  const deleteList = () => {
    setTodos([]);
    localStorage.removeItem("todos");
  };

  return (
    <div className="content">
      <h2>Skapa din egen Todo-list</h2>

      <TodoForm addTodo={addTodo} deleteList={deleteList} />

      {allCompleted && (
        <p className="completed-message">
          Bra jobbat! Alla uppgifter är slutförda. 🎉 Nu förtjänar du en
          belöning för hårt arbete.
        </p>
      )}

      <TodoList todos={sortTodos} markAsCompleted={markAsCompleted} />
    </div>
  );
};

export default TodoPage;
