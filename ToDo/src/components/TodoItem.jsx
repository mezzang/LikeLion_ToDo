import React from "react";
import { TodoItem, TodoText, TodoButton } from "../styles/StyledTodoItem";

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <TodoItem>
      <TodoText completed={todo.completed}>{todo.text}</TodoText>
      <div>
        <TodoButton onClick={onToggle}>완료</TodoButton>
        <TodoButton onClick={onDelete}>삭제</TodoButton>{" "}
      </div>
    </TodoItem>
  );
}

export default TodoItem;
