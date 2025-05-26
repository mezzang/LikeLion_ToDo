import React, { useState, useRef } from "react";
import { InputWrapper, StyledTodoInput } from "../styles/TodoInputStyles.jsx";
import { StyledButton } from "../styles/InputButtonStyles.jsx";

function TodoInput({ onAdd }) {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  const handleAdd = function () {
    console.log("handleAdd this:", this);
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
      <StyledTodoInput
        placeholder="할 일을 입력하세요"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        ref={inputRef}
      />
      {/* <StyledButton onClick={handleAdd}>add</StyledButton> */}
      {/* <StyledButton
        onClick={function () {
          console.log("handleAdd(일반 함수) this:", this);
          const trimmed = input.trim();
          if (trimmed) {
            onAdd(trimmed);
            setInput("");
            inputRef.current.focus();
          }
        }}
      > */}
      <StyledButton
        onClick={() => {
          console.log("handleAdd(화살표 함수) this:", this);
          const trimmed = input.trim();
          if (trimmed) {
            onAdd(trimmed);
            setInput("");
            inputRef.current.focus();
          }
        }}
      >
        add
      </StyledButton>
    </InputWrapper>
  );
}

export default TodoInput;
