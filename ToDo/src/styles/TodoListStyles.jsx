// .todo-list {
//   width: 700px;
//   margin: 0 auto;
//   height: 500px;
//   overflow-y: auto; /* 스크롤이 생성됨 */
//   border: 2px solid orange;
//   border-radius: 20px;
//   padding: 10px;
//   background-color: #fff8ee;
//   box-sizing: border-box;
// }

// .todo-list::-webkit-scrollbar {
//   width: 6px; /* 스크롤바 너비 */
// }

// .todo-list::-webkit-scrollbar-thumb {
//   background-color: #ccc; /* 스크롤바 색상 */
//   border-radius: 4px; /* 스크롤바 둥글게 */
// }
import styled from "styled-components";

export const StyledTodoList = styled.div`
  width: 800px;
  margin: 0 auto;
  height: 600px;
  overflow-y: auto;
  border: 2px solid orange;
  border-radius: 20px;
  padding: 3px;
  background-color: #fff8ee;
  box-sizing: border-box;

  /* 스크롤바 스타일 */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px;
  }
`;
