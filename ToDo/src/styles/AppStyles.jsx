/* .layout-container {
  text-align: center;
  min-height: 100vh;
  background-color: #fff;
}

.layout-header {
  background-color: #fbc057;
  padding: 30px;
  font-size: 2.5rem;
  color: white;
  text-shadow: 1px 1px 2px gray;
}

.layout-main {
  margin-top: 40px;
} */
import styled from "styled-components";

export const LayoutContainer = styled.div`
  text-align: center;
  min-height: 100vh;
  background-color: #fff;
`;

export const LayoutHeader = styled.header`
  background-color: #fbc057;
  padding: 70px;
  font-size: 2.5rem;
  color: white;
  text-shadow: 1px 1px 2px gray;
`;

export const LayoutMain = styled.main`
  margin-top: 30px;
`;
