// .todo-item {
//   display: flex;
//   justify-content: space-between;
//   padding: 8px;
//   border-bottom: 1px solid #ddd;
// }

// .todo-item.completed span {
//   color: #aaa;
//   text-decoration: line-through;
// }

// .todo-item button {
//   margin-left: 5px;
//   border: none;
//   background-color: #ccc;
//   border-radius: 5px;
//   cursor: pointer;
// }

// .todo-item button:hover {
//   background-color: #aaa;
// }
import styled from "styled-components";

export const TodoItemStyles = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #ddd;
`;

export const TodoText = styled.span`
  color: ${(props) => (props.completed ? "#aaa" : "black")};
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

export const TodoButton = styled.button`
  margin-left: 5px;
  border: none;
  background-color: #ccc;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #aaa;
  }
`;
