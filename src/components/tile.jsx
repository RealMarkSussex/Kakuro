import React from "react";
import { FormControl } from "react-bootstrap";
const tile = (props) => {
  return (
    <FormControl
      onChange={props.parentCallback}
      aria-label="tileValue"
    />
  );
};

export default tile;
