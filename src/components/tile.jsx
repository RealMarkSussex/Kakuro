import React from "react";
import { FormControl } from "react-bootstrap";
const style = {
  margin: "10px",
};
const handleChange = (event, props) => {
  const value = event.target.value.replace(/\s/g, "").split(",");
  const childData = {
    value: value,
    position: props.id,
  };
  props.parentCallback(childData);
};
const tile = (props) => {
  return (
    <FormControl
      style={style}
      onChange={(event) => handleChange(event, props)}
      aria-label="tileValue"
    />
  );
};

export default tile;
