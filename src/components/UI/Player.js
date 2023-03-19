import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
const Player = () => {
  const [index, setIndex] = useState(3);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [pause, setPause] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [loading, setLoading] = useState(false);
  const [volume, setVolume] = useState(100);
  const [isMuted, setIsMuted] = useState(false);
  const [volumeBeforeMuted, setVolumeBeforeMuted] = useState(1);
  const playerRef = useRef(null);
  const timelineRef = useRef(null);
  const playheadRef = useRef(null);
  const playheadCircleRef = useRef(null);
  const volumeBarRef = useRef(null);
  const volumeRef = useRef(null);
  const volumeCircleRef = useRef(null);
  const musicList = [
    {
      name: "Nice piano and ukulele",
      author: "Royalty",
      img: "https://www.bensound.com/bensound-img/buddy.jpg",
      audio: "https://www.bensound.com/bensound-music/bensound-buddy.mp3",
      duration: "2:02",
    },
    {
      name: "Gentle acoustic",
      author: "Acoustic",
      img: "https://www.bensound.com/bensound-img/sunny.jpg",
      audio: "https://www.bensound.com//bensound-music/bensound-sunny.mp3",
      duration: "2:20",
    },
    {
      name: "Corporate motivational",
      author: "Corporate",
      img: "https://www.bensound.com/bensound-img/energy.jpg",
      audio: "https://www.bensound.com/bensound-music/bensound-energy.mp3",
      duration: "2:59",
    },
    {
      name: "Slow cinematic",
      author: "Royalty",
      img: "https://www.bensound.com/bensound-img/slowmotion.jpg",
      audio: "https://www.bensound.com/bensound-music/bensound-slowmotion.mp3",
      duration: "3:26",
    },
  ];
  const currentSong = musicList[index];

  useEffect(() => {
    console.log({ playerRef, timelineRef });
    if (
      playerRef === null ||
      playerRef.current === null ||
      timelineRef === null ||
      timelineRef.current === null
    ) {
      setLoading(true);
    } else {
      const playButton = playerRef.current;
      const timelineButton = timelineRef.current;
      setLoading(false);
      playButton.addEventListener("timeupdate", timeUpdate, false);
      playButton.addEventListener("ended", nextSong, false);
      timelineButton.addEventListener("click", changeCurrentTime, false);
      return () => {
        playerRef.current.removeEventListener("timeupdate", timeUpdate);
        playerRef.current.removeEventListener("ended", nextSong);
        timelineRef.current.removeEventListener("click", changeCurrentTime);
      };
    }
  }, [loading]);

  const changeCurrentTime = (e) => {
    const duration = playerRef.current.duration;
    const timelineWidth = timelineRef.current.offsetWidth;
    const userClickWidth = e.offsetX / timelineWidth;
    const userClickWidthInPercent = userClickWidth * 100;
    playheadRef.current.style.width = userClickWidthInPercent + "%";
    playheadCircleRef.current.style.left = userClickWidthInPercent + "%";
    playerRef.current.currentTime = (duration * userClickWidthInPercent) / 100;
    const newTime = formatTime(parseInt(playerRef.current.currentTime));
    setCurrentTime(newTime);
  };

  const timeUpdate = () => {
    const duration = playerRef.current.duration;
    const playPercent = 100 * (playerRef.current.currentTime / duration);
    playheadRef.current.style.width = playPercent + "%";
    playheadCircleRef.current.style.left = playPercent + "%";
    const newTime = formatTime(parseInt(playerRef.current.currentTime));
    setCurrentTime(newTime);
  };

  const formatTime = (currentTime) => {
    const minutes = Math.floor(currentTime / 60);
    let seconds = Math.floor(currentTime % 60);

    seconds = seconds >= 10 ? seconds : "0" + (seconds % 60);

    const formatTime = minutes + ":" + seconds;

    return formatTime;
  };

  const updatePlayer = () => {
    playerRef.current.load();
    setPause(false);
    playheadRef.current.style.width = 0 + "%";
    playheadCircleRef.current.style.left = 0 + "%";
  };

  const nextSong = () => {
    setIndex((index + 1) % musicList.length);
    updatePlayer();
    if (pause) {
      playerRef.current.play();
    }
  };

  const prevSong = () => {
    setIndex((index + musicList.length - 1) % musicList.length);
    updatePlayer();
    if (pause) {
      playerRef.current.play();
    }
  };

  const playOrPause = () => {
    if (!pause) {
      playerRef.current.play();
    } else {
      playerRef.current.pause();
    }
    setPause(!pause);
    console.log("PLAY OR PAUSE \n", { pause, playerRef });
  };

  const handleSound = () => {
    const audio = new Audio(currentSong.audio);
    if (!isMuted) {
      setVolumeBeforeMuted(audio.volume);
      audio.muted = true;
      const newVolume = 0;
      setVolume(newVolume);
      setIsMuted(true);
      volumeRef.current.style.width = newVolume + "%";
      volumeCircleRef.current.style.left = newVolume + "%";
    } else {
      audio.volume = volumeBeforeMuted;
      audio.muted = false;
      const newVolume = (volumeBeforeMuted / 1) * 100;
      setVolume(newVolume);
      setIsMuted(false);
      volumeRef.current.style.width = newVolume + "%";
      volumeCircleRef.current.style.left = newVolume + "%";

    }
  };
  const handleVolume = (e) => {
    const audio = new Audio(currentSong.audio);
    const ratio = e.nativeEvent.offsetX / volumeBarRef.current.offsetWidth;
    audio.volume = ratio;
    const newVolume = ratio * 100;
    setVolume(newVolume);
    //if user  try to change the volume and the song is muted it should unmute
    audio.muted = false;
    setIsMuted(false);
    volumeRef.current.style.width = newVolume + "%";
    volumeCircleRef.current.style.left = newVolume + "%";
    
  };

  const handleLikeSong = (e) => {
    e.preventDefault();
    const btn = e.target;
    if (true) {
      btn.style.fill = "#db4646";
    } else {
      btn.style.fill = "#b3b3b3";
    }
  };

  const handleShuffle = (e) => {
    e.preventDefault();
    const btn = e.target.children[0];
    setShuffle(!shuffle);
    if (shuffle) {
      btn.style.fill = "#1db954";
    } else {
      btn.style.fill = "#b3b3b3";
    }
  };

  const handleRepeat = (e) => {
    e.preventDefault();
    const btn = e.target.children[0];
    setRepeat(!repeat);
    if (repeat) {
      btn.style.fill = "#1db954";
    } else {
      btn.style.fill = "#b3b3b3";
    }
  };

  return (
    <StyledContainer>
      <StyledLeft>
        <StyledImage src={currentSong.img} />
        <StyledSongInfo>
          <StyledSongData>{currentSong.name}</StyledSongData>
          <StyledSongData>{currentSong.author}</StyledSongData>
          <StyledLikeButton onClick={(e) => handleLikeSong(e)}>
            <StyledIconLikeWrapper>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
              </svg>
            </StyledIconLikeWrapper>
          </StyledLikeButton>
        </StyledSongInfo>
      </StyledLeft>
      <StyledCenter>
        <StyledControlContainer>
          <StyledControlButton onClick={(e) => handleShuffle(e)}>
            <StyledIconWrapper>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M403.8 34.4c12-5 25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160H352c-10.1 0-19.6 4.7-25.6 12.8L284 229.3 244 176l31.2-41.6C293.3 110.2 321.8 96 352 96h32V64c0-12.9 7.8-24.6 19.8-29.6zM164 282.7L204 336l-31.2 41.6C154.7 401.8 126.2 416 96 416H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c10.1 0 19.6-4.7 25.6-12.8L164 282.7zm274.6 188c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V416H352c-30.2 0-58.7-14.2-76.8-38.4L121.6 172.8c-6-8.1-15.5-12.8-25.6-12.8H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c30.2 0 58.7 14.2 76.8 38.4L326.4 339.2c6 8.1 15.5 12.8 25.6 12.8h32V320c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64z" />
              </svg>
            </StyledIconWrapper>
          </StyledControlButton>
          <StyledControlButton onClick={prevSong}>
            <StyledIconWrapper>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M267.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160L64 241V96c0-17.7-14.3-32-32-32S0 78.3 0 96V416c0 17.7 14.3 32 32 32s32-14.3 32-32V271l11.5 9.6 192 160z" />
              </svg>
            </StyledIconWrapper>
          </StyledControlButton>
          <StyledControlButton onClick={playOrPause}>
            <StyledIconPlayPauseWrapper>
              {pause ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM224 192V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
                </svg>
              )}
            </StyledIconPlayPauseWrapper>
          </StyledControlButton>
          <StyledControlButton onClick={nextSong}>
            <StyledIconWrapper>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241V96c0-17.7 14.3-32 32-32s32 14.3 32 32V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V271l-11.5 9.6-192 160z" />
              </svg>
            </StyledIconWrapper>
          </StyledControlButton>
          <StyledControlButton onClick={(e) => handleRepeat(e)}>
            <StyledIconWrapper>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M0 224c0 17.7 14.3 32 32 32s32-14.3 32-32c0-53 43-96 96-96H320v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S320 19.1 320 32V64H160C71.6 64 0 135.6 0 224zm512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 53-43 96-96 96H192V352c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V448H352c88.4 0 160-71.6 160-160z" />
              </svg>
            </StyledIconWrapper>
          </StyledControlButton>
        </StyledControlContainer>
        <StyledTimeContainer>
          <StyledTimeStamp>{currentTime}</StyledTimeStamp>
          <StyledTimeBarContainer ref={timelineRef}>
            <StyledPlayHead ref={playheadRef} />
            <StyledPlayHeadCircle ref={playheadCircleRef} />
          </StyledTimeBarContainer>
          <StyledTimeStamp>
            {currentSong && currentSong.duration}
          </StyledTimeStamp>
        </StyledTimeContainer>
      </StyledCenter>
      <StyledRight>
        <StyledControlButton onClick={handleSound} >
          <StyledIconWrapper>
            {!isMuted && volume > 50 ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M533.6 32.5C598.5 85.3 640 165.8 640 256s-41.5 170.8-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z" />
              </svg>
            ) : volume < 50 && volume != 0 && !isMuted ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM412.6 181.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5z" />
              </svg>
            ) : volume == 0 && !isMuted ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M320 64c0-12.6-7.4-24-18.9-29.2s-25-3.1-34.4 5.3L131.8 160H64c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h67.8L266.7 471.9c9.4 8.4 22.9 10.4 34.4 5.3S320 460.6 320 448V64z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" />
              </svg>
            ) }
          </StyledIconWrapper>
        </StyledControlButton>
        <StyledVolumeBarContainer ref={volumeBarRef} onClick={handleVolume}>
          <StyledVolumeBar ref={volumeRef} />
          <StyledVolumeBarCircle ref={volumeCircleRef} />
        </StyledVolumeBarContainer>
      </StyledRight>
      <audio ref={playerRef} src={currentSong.audio} onEnded={nextSong}></audio>
    </StyledContainer>
  );
};
const StyledContainer = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100vw;
  min-height: 100px;
  display: flex;
  background-color: #282828;
  z-index: 999;
  min-width: 700px;
`;

const StyledLeft = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  position: relative;
`;
const StyledImage = styled.img`
  width: 80px;
  height: 65px;
  margin-right: 10px;
  margin-left: 10px;
`;

const StyledSongInfo = styled.div`
  width: 95%;
`;

const StyledSongData = styled.p`
  height: 1.3rem;
  overflow: hidden;
  margin-bottom: 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 50%;
`;

const StyledRight = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
`;

const StyledCenter = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledControlContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;
const StyledLikeButton = styled.button`
  position: absolute;
  left: 80%;
  padding-left: 20px;
  bottom: 2.7vh;
  cursor: pointer;
  background-color: transparent;
  border: none;
  margin: 0px;
`;
const StyledIconLikeWrapper = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 20px;
    height: 20px;
  }
  path {
    fill: #b3b3b3;
  }
`;

const StyledIconPlayPauseWrapper = styled.div`
  width: 30px;
  height: 30px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 30px;
    height: 30px;
  }
  path {
    fill: #b3b3b3;
  }
`;

const StyledIconWrapper = styled.div`
  width: 14px;
  height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 14px;
    height: 14px;
  }
  path {
    fill: #b3b3b3;
  }
`;
const StyledControlButton = styled.button`
  color: #b3b3b3;
  font-size: 14px;
  margin-right: 27px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 0px;
`;
const StyledTimeContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const StyledTimeBarContainer = styled.div`
  background-color: #535353;
  width: 90%;
  height: 4px;
  cursor: pointer;
  position: relative;
  margin: 0px 5px;
`;

const StyledTimeStamp = styled.span`
  margin-right: 6px;
  font-size: 14px;
  color: #b3b3b3;
`;
const StyledPlayHead = styled.div`
  background-color: #b3b3b3;
  width: 0px;
  height: 4px;
`;
const StyledPlayHeadCircle = styled.div`
  width: 12px;
  height: 12px;
  background-color: #ffffff;
  border-radius: 50%;
  position: absolute;
  top: -4px;
  margin-left: -6px;
`;

const StyledVolumeBarContainer = styled.div`
cursor: pointer;
width: 70px;
height: 4px;
max-width: 100px;
min-width: 60px;
background-color: #535353;
position: relative;
 :hover {
  span{
    display: block;
  }
 }
`;
const StyledVolumeBar = styled.div`
height: 4px;
background-color: #b3b3b3;
width: 0px;
`;
const StyledVolumeBarCircle = styled.span`
  width: 12px;
  height: 12px;
  background-color: #ffffff;
  border-radius: 50%;
  position: absolute;
  top: -4px;
  display: none;
  margin-left: -6px;
`;

export default Player;
