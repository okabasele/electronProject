import React, { useContext } from 'react'
import PlaylistContainer from '../components/UI/PlaylistContainer'
import PlaylistHeader from '../components/UI/PlaylistHeader'
import { AudioContext } from '../context/AudioContext';
import musics from '../helpers/musics';

const Liked = () => {
  const { updatePlayerContext } = useContext(AudioContext);

  return (
    <>
    <PlaylistHeader
    title="Titres likés"
    img="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
    handleClick={() => updatePlayerContext(musics[0], musics)}
  />
  <PlaylistContainer songsList={musics} />
    </>

  )
}

export default Liked