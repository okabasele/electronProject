import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PlaylistContainer from "../components/UI/PlaylistContainer";
import PlaylistHeader from "../components/UI/PlaylistHeader";

const UploadMusic = () => {
  const { open, getFileData, removeEventListener } = window.dialog;
  const [fileData, setFile] = useState({});
  const [onPlayingList, setOnPlayingList] = useState([]);

  const openDialog = () => {
    console.log("handle submit!");
    open();
    getFileData(setFile);
  };

  useEffect(() => {
    setOnPlayingList(JSON.parse(localStorage.getItem("musicList")));
    return () => {
      removeEventListener();
    };
  }, []);

  useEffect(() => {
    if (fileData?.audio) {
      const musicList = JSON.parse(localStorage.getItem("musicList"));
      if (musicList === null) {
        localStorage.setItem("musicList", JSON.stringify([fileData]));
      } else {
        localStorage.setItem(
          "musicList",
          JSON.stringify([...musicList, fileData])
        );
      }
    }
    console.log({ fileData });
  }, [fileData]);

  return (
    <>
      <PlaylistHeader
        title="Titres importés"
        img="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
        openDialog={openDialog}
      />
      {onPlayingList ? (
        <>
          <PlaylistContainer songsList={onPlayingList} />
        </>
      ) : (
        <StyledTitle>Vous n'avez pas encore importé de musique</StyledTitle>
      )}
    </>
  );
};
const StyledTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 7px;
  width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #ffffff;
`;

export default UploadMusic;
