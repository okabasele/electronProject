import React, { useState } from 'react'
import styled from "styled-components";

const SingleSong = ({img,name,author,duration,id}) => {
    const [isHovered, setisHovered] = useState(false);

  return (
    <StyledSongContainer onMouseOver={e=>setisHovered(true)} onMouseOut={e=>setisHovered(false)}  >
    <StyledContent>
      <StyledButtonIcon>
        {
          isHovered ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
        </svg>

          ) : (<StyledText>{id}</StyledText>)
        }
      </StyledButtonIcon>
      <StyledImage src={img} />
      <StyledSongDetails>
        <StyledTitle>{name}</StyledTitle>
        <StyledText>{author}</StyledText>
      </StyledSongDetails>
    </StyledContent>
    <StyledContent>
    <StyledText>{duration}</StyledText>
    </StyledContent>
  </StyledSongContainer>
  )
}

const StyledSongContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 5px;
`;

const StyledContent = styled.div`
  display: flex;
  align-items: center;
`;

const StyledSongDetails = styled.div`
  margin-left: 15px;
`;

const StyledTitle = styled.h3`
  color: #fff;
`;

const StyledText = styled.p`
  color: #b3b3b3;
`;

const StyledButtonIcon = styled.button`
background-color: transparent;
border: none;
cursor: pointer;
svg{
    width: 16px;
    height: 16px;
    fill: rgb(179, 179, 179);
}

:hover{
    svg{
        fill: #fff;
    }
}
`;

const StyledImage = styled.img`
  width: 50px;
  height: 40px;
  margin-left: 15px;
`;

export default SingleSong