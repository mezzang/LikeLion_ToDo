import React, { useState, useRef } from "react";
import { InputWrapper, TodoInput } from "../styles/StyledInput";
import { StyledButton } from "../styles/InputButtonStyles.jsx";

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
    <InputWrapper>
      <TodoInput placeholder="할 일을 입력하세요" />
      <StyledButton onClick={handleAdd}>add</StyledButton>
    </InputWrapper>
  );
}

export default TodoInput;
