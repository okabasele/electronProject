import React from "react";
import styled from "styled-components";
import SingleSong from "./SingleSong";

const PlaylistContainer = ({ songsList }) => {
  return (
    <StyledContainer>
      {songsList.map((song, id) => (
        <SingleSong key={id} img={song.img} name={song.name} author={song.author} duration={song.duration} id={id+1} />
      ))}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  padding: 0px 20px;
`;
export default PlaylistContainer;
