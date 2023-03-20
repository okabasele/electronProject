import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../partials/Header.js";
import SideBar from "../partials/SideBar.js";
import Player from "../UI/Player.js";

const MainLayout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <SideBar />
      <StyledContainer>
        <StyledWrapper>{children}</StyledWrapper>
      </StyledContainer>
      <Player />
    </>
  );
};
const GlobalStyle = createGlobalStyle`
body,* {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
`;

const StyledContainer = styled.div`
  background-color: #121212;
  height: 100vh;
  padding-bottom: 120px;
  padding-left: 240px;
  overflow-y: auto;
  padding-top: 60px;
`;

const StyledWrapper = styled.div`
  margin-top: 32px;
  display: block;
`;
export default MainLayout;
