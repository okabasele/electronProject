import React from "react";
import styled from "styled-components";

const PlaylistCard = ({ title, desc, img }) => {
  if (img === "") {
    img = "https://i.scdn.co/image/ab67706f000000029f66e905e5e5d71e5fda6e9e";
  }
  return (
    <StyledContainer>
      <StyledPlaylistImage src={img} alt={title + " cover image"} />
      <StyledPosRelative>
        <StyledPlayButton>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
          </svg>
        </StyledPlayButton>
      </StyledPosRelative>
      <StyledPlaylistTitle>{title}</StyledPlaylistTitle>
      <StyledPlaylistDesc>{desc}</StyledPlaylistDesc>
      {/* <Link
      to={isArtist ? "/artist/" + id : "/album/" + id}
      className="album-container"
      id="album-container"
    >
      <img
        src={img}
        alt={title + " cover image"}
        style={{ borderRadius: isArtist ? "50%" : "" }}
      />
      <div className="album-tittle">
        <p className="white-text">{title}</p>
      </div>
      <div className="album-discription">
        <p className="silvery-text">{discription}</p>
      </div>
      <div
        id="circular-paly-button"
        onClick={(e) => {
          e.preventDefault();
          setPlayList(id);
        }}
        style={{
          visibility: currentPlayingAlbumId == id ? "visible" : "",
          display: isArtist ? "none" : "flex",
        }}
      >
        <i
          className="fas fa-play"
          id="album-floating-play-button"
          style={{
            display:
              isPlaying && currentPlayingAlbumId == id ? "none" : "block",
          }}
        ></i>
        <i
          className="fas fa-pause"
          id="album-floating-pause-button"
          style={{
            display:
              isPlaying && currentPlayingAlbumId == id ? "block" : "none",
          }}
        ></i>
      </div>
    </Link> */}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  background-color: #282828;
  max-width: 240px;
  padding: 20px;
  position: relative;
  color: #ffffff;
  :hover {
    button {
      opacity: 1 !important;
      top: -60px;
    }
  }
`;
const StyledPlaylistDesc = styled.p`
  display: block;
  display: -webkit-box;
  width: 100%;
  max-height: 2.4rem;
  margin: 0 auto;
  font-size: 12px;
  line-height: 20px;
  font-weight: 600;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 10px;
  color: rgb(179, 179, 179);
`;
const StyledPlaylistTitle = styled.h4`
  margin-top: 10px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const StyledPlaylistImage = styled.img`
  object-fit: contain;
  width: 100%;
  box-shadow: 0 10px 30px 0 rgba(14, 13, 13, 0.3),
    0 1px 2px 0 rgba(0, 0, 0, 0.2);
`;

const StyledPosRelative = styled.div`
  position: relative;
`;

const StyledPlayButton = styled.button`
  position: absolute;
  right: 10px;
  top: -40px;
  padding: 18px;
  background-color: #1db954;
  border-radius: 100%;
  opacity: 0;
  border: none;
  transition: all ease 0.4s;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
`;

export default PlaylistCard;
