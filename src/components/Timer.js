import React, { useState, useEffect } from "react";

const Timer = (props) => {
  const [timerSecond, setTimerSecond] = useState(0);
  const [playActive, setPlayActive] = useState(false);

  const decreaseTimer = () => {
    switch (timerSecond) {
      case 0:
        if (props.timerMinute === 0) {
          setPlayActive(false);
          props.toggleSession();
          setTimerSecond(1);
        } else {
          props.updateTimerMinute();
          setTimerSecond(60);
        }

      default:
        setTimerSecond((prevState) => prevState - 1);
    }
  };

  useEffect(() => {
    if (playActive) {
      var interval = setInterval(() => {
        decreaseTimer();
      }, 1000);
    }

    return () => {
      if (interval !== undefined) clearInterval(interval);
    };
  }, [timerSecond, playActive]);

  const handlePlay = () => {
    setPlayActive(true);
  };

  const handleStop = () => {
    setPlayActive(false);
  };

  const handleRefresh = () => {
    handleStop();
    setTimerSecond(0);
    props.reset();
  };

  const onSkip = () => {
    let result = window.confirm("Are you sure that you want to skip?");
    if (result) {
      setPlayActive(false);
      setTimerSecond(0);
      props.toggleSession();
    }
  };

  return (
    <section className="rootSection">
      <section className="timerContainer">
        <h4>{props.isSession ? "Session" : "Break"}</h4>
        <span className="timer">{props.timerMinute}</span>
        <span className="timer">:</span>
        <span className="timer">
          {timerSecond === 0
            ? "00"
            : timerSecond < 10
            ? "0" + timerSecond
            : timerSecond}
        </span>
      </section>
      <div className="timerActions">
        <button onClick={handlePlay}>Play</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleRefresh}>Refresh</button>
        <button onClick={onSkip}> Skip </button>
      </div>
    </section>
  );
};

export default Timer;
