import React, { useState, useEffect } from "react";
import { FormControl } from "react-bootstrap";
const style = {
  margin: "10px",
};
const handleKey = (event, props, submitted, setSubmitted) => {
  if (event.keyCode === 13) {
    const value = event.target.value.replace(/\s/g, "").split(",");
    const childData = {
      value: value,
      position: props.id,
    };
    console.log(submitted);
    props.parentCallback(childData, submitted);
    setSubmitted(true);
  }
};

const completedBoardChanged = (setTileValue, props) => {
  let tile = props.completedBoard.find((e) => e.position === props.id);
  if (tile !== undefined) {
    let value = tile.value;
    if (value.length === 1) {
      setTileValue(value[0]);
    }
  }
};

const handleChange = (event, setTileValue) => {
  setTileValue(event.target.value);
};
const Tile = (props) => {
  const [tileValue, setTileValue] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => completedBoardChanged(setTileValue, props), [
    props.completedBoard,
  ]);
  return (
    <FormControl
      style={style}
      onKeyDown={(event) => handleKey(event, props, submitted, setSubmitted)}
      aria-label="tileValue"
      onChange={(event) => handleChange(event, setTileValue)}
      value={tileValue}
    />
  );
};

export default Tile;
