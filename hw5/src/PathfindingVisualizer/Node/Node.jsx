import React from "react";

import "./Node.css";

// BEGIN PART 3

const Node = (/* YOUR CODE HERE */props) => {
  // YOUR CODE HERE
  // {
  const col = props.col;
  const isFinish = props.isFinish;
  const isStart = props.isStart;
  const isWall = props.isWall;
  const onMouseDown = props.onMouseDown;
  const onMouseEnter = props.onMouseEnter;
  const onMouseUp = props.onMouseUp;
  const row = props.row;
  // };
  const extraClassName = isFinish
    ? "node-finish"
    : isStart
    ? "node-start"
    : isWall
    ? "node-wall"
    : "";
  return <div /* YOUR CODE HERE */
            id={`node-${row}-${col}`}
            className={`node ${extraClassName}`}
            onMouseDown={() => onMouseDown(row, col)}
            onMouseEnter={() => onMouseEnter(row, col)}
            onMouseUp={() => onMouseUp()}>
            </div>;
};

// END PART 3

export default Node;
