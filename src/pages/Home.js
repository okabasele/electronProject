import React from "react";
import styled from "styled-components";
import PlaylistCard from "../components/UI/PlaylistCard";
import playlists from "../helpers/playlists";

const Home = () => {

  const playlistsItemsJsx = playlists.map((playlist, id) => {
    return playlist.items.map((item, id) => {
     return <PlaylistCard key={id} title={item.title} desc={item.desc} img={item.img} />
    })
  })

  const playlistsTitleJsx = playlists.map((playlist, id) => {
    return (
        <StyledPlaylistTitle key={id} >{playlist.category}</StyledPlaylistTitle>
    );
  });

  return (
    <>
      <StyledTitle>Les playlists du moments</StyledTitle>
        {
          playlistsTitleJsx.map((title, id) => {

            return (
              <>
                {title}
                <StyledPlaylistGrid>
                  {playlistsItemsJsx[id]}
                </StyledPlaylistGrid>
              </>
            )
          })
        }
    </>
  );
};

const StyledTitle = styled.h2`
  color: #ffffff;
  margin-left: 20px;
  font-size: 2rem;
  margin-bottom: 40px;
`;
const StyledPlaylistTitle = styled.h2`
  color: #ffffff;
  margin-left: 20px;
  font-size: 1.5rem;
`;


const StyledPlaylistGrid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
justify-items: stretch;
grid-column-gap: 20px;
grid-row-gap: 20px;
padding: 20px;
width: auto;
`;

export default Home;
