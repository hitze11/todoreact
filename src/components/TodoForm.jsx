import React, { useState } from "react";

const TodoForm = ({ onAdd }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAdd(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
      <input
        className="flex flex-col font-bold border-2 border-green-500 text-green-500 p-3 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 shadow-[0_4px_10px_rgba(255,255,0,0.7)]"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Neue Aufgabe"
      />
      <button
        className="bg-black text-green-500 py-2 px-6 rounded-md shadow-[0_4px_10px_rgba(255,255,0,0.7)] hover:bg-gray-800 transition duration-200"
        type="submit"
      >
        Hinzufügen
      </button>
    </form>
  );
};

export default TodoForm;
