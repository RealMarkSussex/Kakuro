import React from "react";
import Tile from "./tile";
import { Container, Col, Row } from "react-bootstrap";

const childData = [];
const callbackFunction = (childData) => {
    //childData.push(childData);
    console.log(childData.target.value);
}
const board = () => {
  let tileRows = [];
  for (let i = 0; i < 5; i++) {
    tileRows.push(
      <Row>
        <Col>
          <Tile parentCallback={callbackFunction} key={(i + 1)}/>
        </Col>
        <Col>
          <Tile parentCallback={callbackFunction} key={(i + 6)}/>
        </Col>
        <Col>
          <Tile parentCallback={callbackFunction} key={(i + 11)}/>
        </Col>
        <Col>
          <Tile parentCallback={callbackFunction} key={(i + 16)}/>
        </Col>
        <Col>
          <Tile parentCallback={callbackFunction} key={(i + 21)}/>
        </Col>
      </Row>
    );
  }
  return (<Container>
      {tileRows}
  </Container>);
};
export default board;
