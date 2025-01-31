import React from "react";

const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <li className=" flex flex-grid justify-between items-center p-2"
      style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      <span onClick={() => onToggle(todo.id)}>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>entfernen</button>
    </li>
  );
};

export default TodoItem;
