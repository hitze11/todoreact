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
    <div className="min-h-screen min-w-screen flex justify-center items-center bg-green-500 border-4 border-black ">
      <div className="w-full max-w-4xl bg-black p-8 rounded-xl shadow-[0_40px_80px_rgba(255,255,0,0.5)]">
        <h1 className="flex flex-col mx-auto text-3xl font-bold text-center text-green-600 mb-6  shadow-[0_4px_10px_rgba(255,255,0,0.7)]">
          Todo App
        </h1>
        <TodoForm onAdd={addTodo} />
        <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} />
      </div>
    </div>
  );
};

export default App;
