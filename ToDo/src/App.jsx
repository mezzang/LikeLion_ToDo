import React, { useState, useEffect } from "react";
import Layout from "./components/Layout";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos"); // 저장된 문자열 데이터를 가져온다.
    return saved ? JSON.parse(saved) : []; // 문자열을 js 객체로 변환한다.
  }); // 초기 상태 설정: 로컬 스토리지에서 불러오거나 빈 배열

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); // 객체를 문자열로 전환하고 로컬스토리지에 문자열을 저장한다.

  const addTodo = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const newTodo = { id: Date.now(), text: trimmed, completed: false }; // 시간으로 id생성
    setTodos([newTodo, ...todos]); // 앞에 새항목 추가
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(
        (todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo // 완료 상태 토글
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id)); // 아이디가 일치하지 않는 항목만 남긴다.
  };

  return (
    <Layout>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </Layout>
  );
}

export default App;
