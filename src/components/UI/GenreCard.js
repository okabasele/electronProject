import React from "react";
import styled from "styled-components";

const GenreCard = ({ title = "", img, bgColor }) => {
  return (
    <StyledCard bgColor={bgColor}>
      <StyledCardTitle>{title}</StyledCardTitle>
      <StyledCardImage src={img} alt={title} />
    </StyledCard>
  );
};

const StyledCard = styled.div`
  background-color: ${(props) => props.bgColor};
  position: relative;
  max-width: 230px;
  height: 200px;
  border-radius: 10px;
  padding-top: 15px;
  overflow: hidden;
`;
const StyledCardTitle = styled.h6`
color: hsl(0, 0%, 100%);
font-size: 1.5rem;
margin-left: 20px;
`;
const StyledCardImage = styled.img`
position: absolute;
bottom: 0px;
right: 0px;
width: 130px;
transform: rotate(25deg) translate(18%, -2%);
`;

export default GenreCard;
