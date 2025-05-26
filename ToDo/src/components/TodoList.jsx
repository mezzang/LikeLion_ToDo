import React from "react";
import { StyledTodoList } from "../styles/TodoListStyles";
import TodoItem from "./TodoItem";

function TodoList({ todos, onToggle, onDelete }) {
  return (
    <StyledTodoList>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => onToggle(todo.id)}
          onDelete={() => onDelete(todo.id)}
        />
      ))}
    </StyledTodoList>
  );
}

export default TodoList;
