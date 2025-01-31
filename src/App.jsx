import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center bg-green-500">
      <div className="w-full max-w-4xl bg-black p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-white mb-6">Todo App</h1>
        <TodoForm onAdd={addTodo} />
        <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} />
      </div>
    </div>
  );
};

export default App;
