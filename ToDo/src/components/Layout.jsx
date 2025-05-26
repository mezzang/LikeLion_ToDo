import React from "react";
import {
  LayoutContainer,
  LayoutMain,
  LayoutHeader,
} from "../styles/AppStyles.jsx";

function Layout({ children }) {
  return (
    <LayoutContainer>
      <LayoutHeader>To Do List</LayoutHeader>
      <LayoutMain>{children}</LayoutMain>
    </LayoutContainer>
  );
}

export default Layout;
