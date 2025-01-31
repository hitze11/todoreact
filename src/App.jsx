import React, { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import useTodoStore from './store/useTodoStore';

const App = () => {
  const { todos, addTodo, deleteTodo, toggleTodo } = useTodoStore();
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      storedTodos.forEach(todo => addTodo(todo.text));
    }
  }, [addTodo]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
    return true;
  });

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <div>
        <button onClick={() => setFilter('all')}>Alle</button>
        <button onClick={() => setFilter('active')}>Offene</button>
        <button onClick={() => setFilter('completed')}>Erledigte</button>
      </div>
      <TodoList todos={filteredTodos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </div>
  );
};

export default App;
