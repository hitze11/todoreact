import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete, onToggle }) => {
  return (
    <ul className="text-green-600 font-bold shadow-[0_4px_10px_rgba(255,255,0,0.7)] p-4 rounded-md">
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
