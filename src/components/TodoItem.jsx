import React from "react";

const TodoItem = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <li
      style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      onClick={() => toggleTodo(todo.id)}
    >
      {todo.text}
      <button
        onClick={(e) => {
          e.stopPropagation();
          deleteTodo(todo.id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
