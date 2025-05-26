// .input-wrapper {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 30px;
// }

// .todo-input {
//   padding: 10px;
//   font-size: 1rem;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   width: 500px;
//   transition: border-color 0.3s;
// }

// .todo-input:focus {
//   outline: none;
//   border-color: orange;
// }
import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;

export const TodoInput = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 500px;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: orange;
  }
`;
