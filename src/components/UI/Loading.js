import React from "react";
import styled from "styled-components";

const Loading = ({ isLoad }) => {
  return (
    <>
      {isLoad && (
        <StyledContainer>
          <StyledWrapper>
            <StyledImage src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Gray_circles_rotate.gif" alt="loader" />
          </StyledWrapper>
        </StyledContainer>
      )}
    </>
  );
};

const StyledContainer = styled.div`
position: relative;
  width: 55px;
  height: 55px;
`;
const StyledWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const StyledImage = styled.img`
  width: 100%;
`;

export default Loading;
