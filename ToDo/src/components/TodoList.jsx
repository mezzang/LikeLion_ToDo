import React from "react";
import { TodoList } from "../styles/TodoListStyles";
import { TodoItem } from "../styles/TodoItemStyles.jsx";

function TodoList({ todos, onToggle, onDelete }) {
  return (
    <TodoList>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => onToggle(todo.id)}
          onDelete={() => onDelete(todo.id)}
        />
      ))}
    </TodoList>
  );
}

export default TodoList;
