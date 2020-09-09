import React from "react";
import { FormControl } from "react-bootstrap";
const handleChange = (event, props) => {
    const value = event.target.value.replace(/\s/g,'').split(',')
    const childData = {
        value: value,
        position: props.id
    }
    props.parentCallback(childData);
}
const tile = (props) => {
  return (
    <FormControl
      onChange={(event) => handleChange(event, props)}
      aria-label="tileValue"
    />
  );
};

export default tile;
