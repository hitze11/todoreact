import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import useTodoStore from "./store/useTodoStore";

const App = () => {
  const { todos, addTodo, deleteTodo, toggleTodo } = useTodoStore();

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </div>
  );
};

export default App;
