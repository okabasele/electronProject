import { createContext, useState, useRef } from "react";
import musics from "../data/musics";

export const AudioContext = createContext({
  playerRef: null,
  activePlaylist: [],
  index: 0,
  activeSong: {},
  pause: false,
});

export const AudioContextProvider = ({ children }) => {
  const [activePlaylist, setActivePlaylist] = useState(musics);
  const [index, setIndex] = useState(0);
  const [pause, setPause] = useState(false);
  const playerRef = useRef(null);
  const activeSong = activePlaylist[index];

  const updatePlayerContext = (song, playlist) => {
    setActivePlaylist(playlist);
    setIndex(song.id-1);
    setPause(false);
    playerRef.current.load();
  };

  const context = {
    playerRef,
    activePlaylist,
    index,
    activeSong,
    pause,
    setPause,
    setActivePlaylist,
    setIndex,
    updatePlayerContext,
  };

  return (
    <AudioContext.Provider value={context}>{children}</AudioContext.Provider>
  );
};
