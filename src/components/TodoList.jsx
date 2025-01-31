// src/components/TodoList.jsx
import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete, onToggle }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
};

export default TodoList;
