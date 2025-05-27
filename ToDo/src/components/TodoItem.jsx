import React from "react";
import {
  TodoItemStyles,
  TodoText,
  TodoButton,
} from "../styles/TodoItemStyles.jsx";

function TodoItem({ todo, onToggle, onDelete }) {
  // 구조 분해 할당
  return (
    <TodoItemStyles>
      <TodoText completed={todo.completed}>{todo.text}</TodoText>
      <div>
        <TodoButton onClick={onToggle}>완료</TodoButton>
        <TodoButton onClick={onDelete}>삭제</TodoButton> {/* 트리거 함수 */}
      </div>
    </TodoItemStyles>
  );
}

export default TodoItem;
