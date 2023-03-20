import React from "react";
import styled from "styled-components";

const PlaylistHeader = ({ title, img, openDialog,handleClick }) => {
  return (
    <>
      <StyledContainer>
        <StyledLeft>
          <StyledImage src={img} alt="cover image" />
        </StyledLeft>
        <StyledRight>
          <StyledType>playlist</StyledType>
          <StyledTitle>{title}</StyledTitle>
        </StyledRight>
      </StyledContainer>
      <StyledControl>
        <StyledPlayButton onClick={handleClick} >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
          </svg>
        </StyledPlayButton>
        {openDialog && (
          <StyledAddButton onClick={openDialog} >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
            </svg>
          </StyledAddButton>
        )}
      </StyledControl>
    </>
  );
};

const StyledContainer = styled.div`
  display: flex;
  padding: 20px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
`;

const StyledLeft = styled.div`
  display: block;
  width: 25%;
  min-width: 200px;
`;

const StyledImage = styled.img`
  width: 100%;
`;

const StyledRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 20px;
  width: 75%;
`;

const StyledType = styled.h4`
  text-transform: uppercase;
  color: #ffffff;
`;
const StyledTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 7px;
  width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #ffffff;
`;

const StyledControl = styled.div`
  display: flex;
  padding: 25px;
  align-items: center;
`;

const StyledPlayButton = styled.button`
  width: 55px;
  height: 55px;
  background-color: #1db954;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  svg {
    width: 16px;
    height: 16px;
    fill: #ffffff;
  }
`;
const StyledAddButton = styled.button`
  margin-left: 20px;
  width: 55px;
  height: 55px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  svg {
    width: 16px;
    height: 16px;
    fill: rgb(179, 179, 179);
  }
`;
export default PlaylistHeader;
