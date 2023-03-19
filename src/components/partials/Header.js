import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <StyledWrapper>
        <StyledButton onClick={()=> navigate(-1)} >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
          </svg>
        </StyledButton>
        <StyledButton onClick={()=> navigate(1)} >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </StyledButton>
        {location.pathname === "/search" && (
          <StyledSearchBox>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
            <StyledSearchInput placeholder="Que souhaitez-vous écoutez?" />
          </StyledSearchBox>
        )}
      </StyledWrapper>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  background-color: rgb(18, 18, 18);
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 999;
  height: 60px;
  /* background-color: #315a60; */
  top: 0px;
  left: 0px;
  align-items: center;
  padding-left: 285px;
  padding-right: 15px;
`;

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #050505;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
  border: none;

  svg {
    fill: #e1e1e1;
    width: 16px;
    height: 16px;
  }
`;

const StyledSearchBox = styled.div`
  width: 40%;
  height: 40px;
  background-color: #ffffff;
  min-width: 200px;
  border-radius: 22px;
  display: flex;
  align-items: center;
  overflow: hidden;

  svg {
    margin-left: 7px;
    width: 16px;
    height: 16px;
  }
`;

const StyledSearchInput = styled.input`
height: 100%;
width: 98%;
border: none;
padding: 0px 10px;
outline-width: 0px;
}
`;

export default Header;
