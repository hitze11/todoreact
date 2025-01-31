import React from "react";

const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <li
      className="flex flex-grid justify-between items-center p-2"
      style={{ textDecoration: todo.completed ? "line-through" : "none" }}
    >
      <span onClick={() => onToggle(todo.id)}>{todo.text}</span>
      <button
        onClick={() => onDelete(todo.id)}
        className="border-2 border-yellow-500 text-red-600 py-1 px-4 rounded-md hover:bg-yellow-500 hover:text-red shadow-[0_4px_10px_rgba(255,255,0,0.7)] transition duration-200"
      >
        Entfernen
      </button>
    </li>
  );
};

export default TodoItem;
