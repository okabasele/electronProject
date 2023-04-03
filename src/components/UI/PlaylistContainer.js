import React, { useContext } from "react";
import styled from "styled-components";
import SingleSong from "./SingleSong";
import { AudioContext } from "../../context/AudioContext";

const PlaylistContainer = ({ songsList }) => {
  const { 
    updatePlayerContext
  
  } = useContext(AudioContext);
  return (
    <StyledContainer>
      {songsList.map((song) => (
        <SingleSong key={song.id} handleClick={()=> updatePlayerContext(song,songsList)} img={song.img} name={song.name} author={song.author} duration={song.duration} id={song.id} />
      ))}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  padding: 0px 20px;
`;
export default PlaylistContainer;
