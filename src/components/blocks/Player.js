import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
const Player = () => {
  const [index, setIndex] = useState(3);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [pause, setPause] = useState(false);
  const playerRef = useRef(null);
  const timelineRef = useRef(null);
  const playheadRef = useRef(null);
  const hoverPlayheadRef = useRef(null);
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
    const playButton = playerRef.current;
    const timelineButton = timelineRef.current;
    if (!playButton || !timelineButton) return;

    playButton.addEventListener("timeupdate", timeUpdate, false);
    playButton.addEventListener("ended", nextSong, false);
    timelineButton.addEventListener("click", changeCurrentTime, false);
    timelineButton.addEventListener("mousemove", hoverTimeLine, false);
    timelineButton.addEventListener("mouseout", resetTimeLine, false);
    return () => {
      playButton.removeEventListener("timeupdate", timeUpdate);
      playButton.removeEventListener("ended", nextSong);
      timelineButton.removeEventListener("click", changeCurrentTime);
      timelineButton.removeEventListener("mousemove", hoverTimeLine);
      timelineButton.removeEventListener("mouseout", resetTimeLine);
    };
  }, []);

  const changeCurrentTime = (e) => {
    const duration = playerRef.current.duration;
    const timelineLeft = timelineRef.current.offsetLeft;
    const timelineWidth = timelineRef.current.offsetWidth;
    const userClickWidth = e.clientX - timelineLeft - 160;

    const userClickWidthInPercent = (userClickWidth *100) / timelineWidth ;

    playheadRef.current.style.width = userClickWidthInPercent + "%";
    playerRef.current.currentTime = (duration * userClickWidthInPercent) / 100;
  };

  const hoverTimeLine = (e) => {
    const duration = playerRef.current.duration;

    const timelineWidth = timelineRef.current.offsetWidth;

    const offsetWidth = timelineRef.current.offsetLeft;
    const userClickWidth = e.clientX - offsetWidth - 160 ;
    const userClickWidthInPercent = (userClickWidth *100)/ timelineWidth;

    if (userClickWidthInPercent <= 100) {
      hoverPlayheadRef.current.style.width = userClickWidthInPercent + "%";
    }

    const time = (duration * userClickWidthInPercent) / 100;

    if (time >= 0 && time <= duration) {
      hoverPlayheadRef.current.dataset.content = formatTime(time);
    }
  };

  const resetTimeLine = () => {
    hoverPlayheadRef.current.style.width = 0;
  };

  const timeUpdate = () => {
    const duration = playerRef.current.duration;
    const timelineWidth = timelineRef.current.offsetWidth - playheadRef.current.offsetWidth;
    const playPercent = 100 * (playerRef.current.currentTime / duration);
    playheadRef.current.style.width = playPercent + "%";
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
    const currentSong = musicList[index];
    const audio = new Audio(currentSong.audio);
    playerRef.current.load();
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
    const currentSong = musicList[index];
    const audio = new Audio(currentSong.audio);
    if (!pause) {
      playerRef.current.play();
    } else {
      playerRef.current.pause();
    }
    setPause(!pause);
  };

  const clickAudio = (key) => {
    setIndex(key);

    updatePlayer();
    if (pause) {
      playerRef.current.play();
    }
  };

  return (
    <>
      <StyledContainer>
        <StyledContainerWrapper>
          <audio ref={playerRef}>
            <source src={currentSong.audio} type="audio/ogg" />
            Your browser does not support the audio element.
          </audio>
          <StyledImage src={currentSong.img} alt="song image" />
          <StyledCenter>
            <StyledSongInfo>
              <StyledSongName>{currentSong.name}</StyledSongName>
              <StyledSongAuthor>{currentSong.author}</StyledSongAuthor>
            </StyledSongInfo>
            <StyledControls>
              <StyledButton
                onClick={prevSong}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5z" />
                </svg>
              </StyledButton>

              <StyledButton onClick={playOrPause}>
                {!pause ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
                  </svg>
                )}
              </StyledButton>
              <StyledButton
                onClick={nextSong}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.596 7.304a.802.802 0 0 1 0 1.392l-6.363 3.692C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692Z" />
                  <path d="M15.596 7.304a.802.802 0 0 1 0 1.392l-6.363 3.692C8.713 12.69 8 12.345 8 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692Z" />
                </svg>
              </StyledButton>
            </StyledControls>

            <StyledPlayer>
                <StyledTime>{currentTime}</StyledTime>
              <StyledTimeline ref={timelineRef}>
                <StyledPlayHead ref={playheadRef}></StyledPlayHead>
                <StyledHoverPlayHead
                  ref={hoverPlayheadRef}
                  data-content="0:00"
                ></StyledHoverPlayHead>
              </StyledTimeline>
                <StyledTime>{currentSong.duration}</StyledTime>
            </StyledPlayer>
          </StyledCenter>
        </StyledContainerWrapper>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  width: 80vw;
  height: 10vh;
  position: fixed;
  margin: 0 10vw;
  /* bottom: 0; */
  /* backdrop-filter: blur(10px); */
  background-color: darkgray;
  display: flex;
  align-items: center;
`;

const StyledContainerWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 0 20px;

`;
const StyledCenter = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-left: 120px;
`;
const StyledPlayer = styled.div`
display: flex;
align-items: center;
`;
const StyledImage = styled.img`
  position: absolute;
  bottom: 0;
  width: 100px;
  height: 100px;
`;

const StyledSongInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledSongName = styled.span`
  color: white;
`;
const StyledSongAuthor = styled.span`
  color: gray;
`;
const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

const StyledControls = styled.div``;

const StyledTime = styled.div`
  color: white;
  margin: 0 10px;
`;

const StyledTimeline = styled.div`
  position: relative;
  margin: 0 auto;
  width: 240px;
  height: 5px;
  background: black;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    div:nth-child(2) {
      opacity: 1;
      &::before {
        opacity: 1;
      }
      &::after {
        opacity: 1;
      }
    }
  }
`;

const StyledHoverPlayHead = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  width: 0;
  height: 5px;
  opacity: 0;
  border-radius: 5px;
  /* background: #274684; */
  transition: opacity 0.3s;
  &::before {
    opacity: 0;
    content: attr(data-content);
    display: block;
    position: absolute;
    top: -30px;
    right: -23px;
    width: 40px;
    padding: 3px;
    text-align: center;
    color: white;
    background: black;
    border-radius: calc(20px - 12px);
  }
  &::after {
    opacity: 0;
    content: "";
    display: block;
    position: absolute;
    top: -8px;
    right: -8px;
    border-top: 8px solid black;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
  }
`;

const StyledPlayHead = styled.div`
  position: relative;
  z-index: 2;
  width: 0;
  height: 5px;
  border-radius: 5px;
  background: white;
`;

export default Player;
