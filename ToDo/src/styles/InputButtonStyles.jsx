/* .input-button {
  margin-left: 10px;
  padding: 10px 30px;
  background-color: #ccc;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.input-button:hover {
  background-color: #aaa;
} */
import styled from "styled-components";

export const StyledButton = styled.button`
  margin-left: 10px;
  padding: 12px 30px;
  background-color: #ccc;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #aaa;
  }
`;
