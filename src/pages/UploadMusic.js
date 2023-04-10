import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Loading from "../components/UI/Loading";
import PlaylistContainer from "../components/UI/PlaylistContainer";
import PlaylistHeader from "../components/UI/PlaylistHeader";
import { AudioContext } from "../context/AudioContext";

const UploadMusic = () => {
  const {
    open,
    getFileData,
    removeEventListener,
    alertErrorNotification,
    alertSuccessNotification,
  } = window.dialog;
  const { updatePlayerContext } = useContext(AudioContext);
  const [fileData, setFile] = useState({});
  const [uploadedList, setUploadedList] = useState([]);
  const [loading, setLoading] = useState(false);

  const openDialog = () => {
    setLoading(true);
    open();
    getFileData(setFile);
  };

  useEffect(() => {
    setUploadedList(JSON.parse(localStorage.getItem("musicList")));
    return () => {
      removeEventListener();
    };
  }, []);

  useEffect(() => {
    if (fileData?.audio) {
      setLoading(false);
      const musicList = JSON.parse(localStorage.getItem("musicList"));
      if (musicList === null) {
        const toInsert = { ...fileData, id: 1 };
        localStorage.setItem("musicList", JSON.stringify([toInsert]));
        setUploadedList([toInsert]);
        alertSuccessNotification();
        console.log(`Le fichier audio ${toInsert.audio} a été ajouté`);
      } else {
        if (musicList.find((music) => music.audio === fileData.audio)) {
          alertErrorNotification();
          console.log(`Le fichier audio ${fileData.audio} est déja présent`);
        } else {
          const toInsert = { ...fileData, id: musicList.length + 1 };
          localStorage.setItem(
            "musicList",
            JSON.stringify([...musicList, toInsert])
          );
          setUploadedList([...musicList, toInsert]);
          alertSuccessNotification();
          console.log(`Le fichier audio ${toInsert.audio} a été ajouté`);
        }
      }
      setFile({});
    }
  }, [fileData, loading]);

  return (
    <>
      <PlaylistHeader
        title="Titres importés"
        img="https://community.spotify.com/t5/image/serverpage/image-id/25294i2836BD1C1A31BDF2?v=v2"
        openDialog={openDialog}
        handleClick={() => updatePlayerContext(uploadedList[0], uploadedList)}
      />
      <Loading isLoad={loading} />

      {uploadedList ? (
        <>
          <PlaylistContainer songsList={uploadedList} />
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
