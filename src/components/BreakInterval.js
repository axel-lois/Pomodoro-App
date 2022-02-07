import React from "react";

const BreakInterval = (props) => {
  const decreaseCounter = () => {
    if (props.breakInterval > 5) {
      props.decreaseBreakLength();
    }
  };

  const increaseCounter = () => {
    if (props.breakInterval < 15) {
      props.increaseBreakLength();
    }
  };

  return (
    <section>
      <h4>Break Length</h4>
      <section className="intervalContainer">
        <button onClick={decreaseCounter}>Down</button>
        <p className="intervalP">{props.breakInterval}</p>
        <button onClick={increaseCounter}>Up</button>
      </section>
    </section>
  );
};

export default BreakInterval;
