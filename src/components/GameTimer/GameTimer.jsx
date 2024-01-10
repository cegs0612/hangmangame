import React, { useState, useEffect } from "react";
import "./gameTimer.css";

function GameTimer({ initialTime, isGameOn, finishGame }) {
  const [time, setTime] = useState(initialTime);

  //controls the timer
  useEffect(() => {
    let timer;
    
    if (isGameOn) {
      timer = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            clearInterval(timer);
            finishGame("lost");
            return 0;
          }
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isGameOn, finishGame]);

  useEffect(() => {
    if(!isGameOn) setTime(initialTime)
  }, [isGameOn])
  

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return <h2>{formatTime(time)}</h2>;
};

export default GameTimer;
