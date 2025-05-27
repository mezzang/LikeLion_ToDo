import React, { useState, useRef } from "react";
import { InputWrapper, StyledTodoInput } from "../styles/TodoInputStyles.jsx";
import { StyledButton } from "../styles/InputButtonStyles.jsx";

function TodoInput({ onAdd }) {
  const [input, setInput] = useState("");
  const inputRef = useRef(null); //ref객체 생성, DOM요소나 변경 가능한 값 저장

  const handleAdd = function () {
    const trimmed = input.trim(); // 입력값의 앞뒤 공백 제거
    if (trimmed) {
      // 공백이 아닌 경우 onAdd 호출
      onAdd(trimmed); //할 일 추가
      setInput(""); // 입력값 초기화
      inputRef.current.focus(); // 현재 연결된 DOM요소에 접근
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // 엔터키를 눌렀을 때
      handleAdd();
    }
  };

  return (
    <InputWrapper>
      <StyledTodoInput
        placeholder="할 일을 입력하세요" //html 기본 속성
        value={input} //상태가 요소의 값 직접 제어
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown} //키보드 눌렀을 때 발생
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
