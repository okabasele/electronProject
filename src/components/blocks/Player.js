import React, { useEffect, useRef, useState } from "react";

const Player = () => {
  const [index, setIndex] = useState(3);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [musicList, setMusicList] = useState([
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
  ]);
  const [pause, setPause] = useState(false);
  const currentSong = musicList[index];
  const playerRef = useRef(null);
  const timelineRef = useRef(null);
  const playheadRef = useRef(null);
  const hoverPlayheadRef = useRef(null);

  useEffect(() => {
    playerRef.addEventListener("timeupdate", timeUpdate, false);
    playerRef.addEventListener("ended", nextSong, false);
    timelineRef.addEventListener("click", changeCurrentTime, false);
    timelineRef.addEventListener("mousemove", hoverTimeLine, false);
    timelineRef.addEventListener("mouseout", resetTimeLine, false);
  }, []);

  useEffect(() => {
    return () => {
      playerRef.removeEventListener("timeupdate", timeUpdate);
      playerRef.removeEventListener("ended", nextSong);
      timelineRef.removeEventListener("click", changeCurrentTime);
      timelineRef.removeEventListener("mousemove", hoverTimeLine);
      timelineRef.removeEventListener("mouseout", resetTimeLine);
    };
  }, []);

  const changeCurrentTime = (e) => {
    const duration = playerRef.duration;

    const playheadWidth = timelineRef.offsetWidth;
    const offsetWidht = timelineRef.offsetLeft;
    const userClickWidht = e.clientX - offsetWidht;

    const userClickWidhtInPercent = (userClickWidht * 100) / playheadWidth;

    playheadRef.style.width = userClickWidhtInPercent + "%";
    playerRef.currentTime = (duration * userClickWidhtInPercent) / 100;
  };

  const hoverTimeLine = (e) => {
    const duration = playerRef.duration;

    const playheadWidth = timelineRef.offsetWidth;

    const offsetWidht = timelineRef.offsetLeft;
    const userClickWidht = e.clientX - offsetWidht;
    const userClickWidhtInPercent = (userClickWidht * 100) / playheadWidth;

    if (userClickWidhtInPercent <= 100) {
      hoverPlayheadRef.style.width = userClickWidhtInPercent + "%";
    }

    const time = (duration * userClickWidhtInPercent) / 100;

    if (time >= 0 && time <= duration) {
      hoverPlayheadRef.dataset.content = formatTime(time);
    }
  };

  const resetTimeLine = () => {
    hoverPlayheadRef.style.width = 0;
  };

  const timeUpdate = () => {
    const duration = playerRef.duration;
    const timelineWidth = timelineRef.offsetWidth - playheadRef.offsetWidth;
    const playPercent = 100 * (playerRef.currentTime / duration);
    playheadRef.style.width = playPercent + "%";
    const newTime = formatTime(parseInt(playerRef.currentTime));
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
    playerRef.load();
  };

  const nextSong = () => {
    setIndex((index + 1) % musicList.length);
    updatePlayer();
    if (pause) {
      playerRef.play();
    }
  };

  const prevSong = () => {
    setIndex((index + musicList.length - 1) % musicList.length);
    updatePlayer();
    if (pause) {
      playerRef.play();
    }
  };

  const playOrPause = () => {
    const currentSong = musicList[index];
    const audio = new Audio(currentSong.audio);
    if (!pause) {
      playerRef.play();
    } else {
      playerRef.pause();
    }
    setPause(!pause);
  };

  const clickAudio = (key) => {
    setIndex(key);

    updatePlayer();
    if (pause) {
      playerRef.play();
    }
  };

  return (<>
      <div className="card">
        <div className="current-song">
          <audio ref={(ref) => (playerRef.current = ref)}>
            <source src={currentSong.audio} type="audio/ogg" />
            Your browser does not support the audio element.
          </audio>
          <div className="img-wrap">
            <img src={currentSong.img} />
          </div>
          <span className="song-name">{currentSong.name}</span>
          <span className="song-autor">{currentSong.author}</span>

          <div className="time">
            <div className="current-time">{currentTime}</div>
            <div className="end-time">{currentSong.duration}</div>
          </div>

          <div ref={(ref) => (timelineRef.current = ref)} id="timeline">
            <div ref={(ref) => (playheadRef.current = ref)} id="playhead"></div>
            <div
              ref={(ref) => (hoverPlayheadRef.current = ref)}
              class="hover-playhead"
              data-content="0:00"
            ></div>
          </div>

          <div className="controls">
            <button
              onClick={prevSong}
              className="prev prev-next current-btn"
            >
              <i className="fas fa-backward"></i>
            </button>

            <button onClick={playOrPause} className="play current-btn">
              {!pause ? (
                <i className="fas fa-play"></i>
              ) : (
                <i class="fas fa-pause"></i>
              )}
            </button>
            <button
              onClick={nextSong}
              className="next prev-next current-btn"
            >
              <i className="fas fa-forward"></i>
            </button>
          </div>
        </div>
        {/* <div className="play-list">
          {musicList.map((music, key = 0) => (
            <div
              key={key}
              onClick={() => this.clickAudio(key)}
              className={
                "track " +
                (index === key && !pause ? "current-audio" : "") +
                (index === key && pause ? "play-now" : "")
              }
            >
              <img className="track-img" src={music.img} />
              <div className="track-discr">
                <span className="track-name">{music.name}</span>
                <span className="track-author">{music.author}</span>
              </div>
              <span className="track-duration">
                {index === key ? currentTime : music.duration}
              </span>
            </div>
          ))}
        </div> */}
      </div>
  </>);
};

export default Player;
