import React from "react";

const SessionLength = (props) => {
  const increase = () => {
    if (props.sessionLength < 60) {
      props.increaseSessionLength();
    }
  };

  const decrease = () => {
    if (props.sessionLength > 25) {
      props.decreaseSessionLength();
    }
  };

  return (
    <section>
      <h4>Session Length</h4>
      <section className="intervalContainer">
        <button onClick={decrease}>Down</button>
        <p className="intervalP">{props.sessionLength}</p>
        <button onClick={increase}>Up</button>
      </section>
    </section>
  );
};

export default SessionLength;
