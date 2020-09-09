import React from "react";
import Tile from "./tile";
import { Container, Col, Row } from "react-bootstrap";

const childrenData = [];
const callbackFunction = (childData) => {
  childrenData.push(childData);
  console.log(childData);
};
const board = () => {
  let tileRows = [];
  for (let i = 0; i < 5; i++) {
    tileRows.push(
      <Row>
        <Col>
          <Tile parentCallback={callbackFunction} key={i + 1} id={i + 1} />
        </Col>
        <Col>
          <Tile parentCallback={callbackFunction} key={i + 6} id={i + 6} />
        </Col>
        <Col>
          <Tile parentCallback={callbackFunction} key={i + 11} id={i + 11} />
        </Col>
        <Col>
          <Tile parentCallback={callbackFunction} key={i + 16} id={i + 16} />
        </Col>
        <Col>
          <Tile parentCallback={callbackFunction} key={i + 21} id={i + 21} />
        </Col>
      </Row>
    );
  }
  return <Container>{tileRows}</Container>;
};
export default board;
