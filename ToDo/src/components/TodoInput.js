import React, { useState, useRef } from "react";
import "../styles/TodoInput.css";
import "../styles/InputButton.css";

function TodoInput({ onAdd }) {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  const handleAdd = () => {
    const trimmed = input.trim();
    if (trimmed) {
      onAdd(trimmed);
      setInput("");
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="input-wrapper">
      <input
        type="text"
        className="todo-input"
        placeholder="add the list"
        value={input}
        ref={inputRef}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="input-button" onClick={handleAdd}>
        add
      </button>
    </div>
  );
}

export default TodoInput;
