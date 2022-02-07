import "./App.css";
import React, { useState } from "react";
import BreakInterval from "./components/BreakInterval";
import SessionLength from "./components/SessionLength";
import Timer from "./components/Timer";

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [isSession, setIsSession] = useState(true);
  const [timerMinute, setTimerMinute] = useState(
    isSession ? sessionLength : breakLength
  );

  const onIncreaseBreakLength = () => {
    setBreakLength((prevState) => prevState + 5);
    if (!isSession) setTimerMinute((prevState) => prevState + 5);
  };
  const onDecreaseBreakLength = () => {
    setBreakLength((prevState) => prevState - 5);
    if (!isSession) setTimerMinute((prevState) => prevState - 5);
  };

  const onIncreaseSessionLength = () => {
    setSessionLength((prevState) => prevState + 5);
    if (isSession) setTimerMinute((prevState) => prevState + 5);
  };

  const onDecreaseSessionLength = () => {
    setSessionLength((prevState) => prevState - 5);
    if (isSession) setTimerMinute((prevState) => prevState - 5);
  };

  const onUpdateTimer = () => {
    setTimerMinute((prevState) => prevState - 1);
  };

  const onResetTimer = () => {
    isSession ? setTimerMinute(sessionLength) : setTimerMinute(breakLength);
  };

  const toggleSession = () => {
    setIsSession((prevState) => !prevState);
    isSession ? setTimerMinute(breakLength) : setTimerMinute(sessionLength);
  };

  return (
    <main >
      <h2>Pomodoro Clock</h2>
      <section className="intervalLengthContainer">
        <BreakInterval
          decreaseBreakLength={onDecreaseBreakLength}
          increaseBreakLength={onIncreaseBreakLength}
          breakInterval={breakLength}
        ></BreakInterval>
        <SessionLength
          increaseSessionLength={onIncreaseSessionLength}
          decreaseSessionLength={onDecreaseSessionLength}
          sessionLength={sessionLength}
        ></SessionLength>
      </section>
      <Timer
        isSession={isSession}
        toggleSession={toggleSession}
        updateTimerMinute={onUpdateTimer}
        breakLength={breakLength}
        timerMinute={timerMinute}
        reset={onResetTimer}
      ></Timer>
    </main>
  );
}

export default App;
