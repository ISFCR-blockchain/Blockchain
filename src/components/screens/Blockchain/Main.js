import React from "react";
import styled from "styled-components";
import BlockBar from "./BlocksTabs";

export default function Main({ children }) {
  return <MainContainer>{ children}</MainContainer>;
}

const MainContainer = styled.main`
  width: 100vw;
  padding: 50px;
  background-color: #f5f5f5;
`;
