import React from "react";
import {
  TodoItemStyles,
  TodoText,
  TodoButton,
} from "../styles/TodoItemStyles.jsx";

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <TodoItemStyles>
      <TodoText completed={todo.completed}>{todo.text}</TodoText>
      <div>
        <TodoButton onClick={onToggle}>완료</TodoButton>
        <TodoButton onClick={onDelete}>삭제</TodoButton>{" "}
      </div>
    </TodoItemStyles>
  );
}

export default TodoItem;
