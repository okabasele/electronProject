import React, { useEffect, useState } from 'react'
import PlaylistContainer from '../components/UI/PlaylistContainer';
import PlaylistHeader from '../components/UI/PlaylistHeader';
import musics from '../helpers/musics';

const UploadMusic = () => {
    const { open, getFilePath, removeEventListener } = window.dialog;
    const [filePath, setFile] = useState({});
  
    const openDialog = () => {
      console.log("handle submit!");
      open();
      getFilePath(setFile);
    };
  
    useEffect(() => {

      return () => {
        removeEventListener();
      };
    }, []);
  
    useEffect(() => {
      console.log({ filePath });
    }, [filePath]);
  
    return (
      <>
       <PlaylistHeader
        title="Titres importés"
        img="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
        openDialog={openDialog}
      />
      <PlaylistContainer songsList={musics} />
      </>
    );

}

export default UploadMusic