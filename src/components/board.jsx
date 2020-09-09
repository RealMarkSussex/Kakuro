import React from "react";
import Tile from "./tile";
import { Container, Col, Row, Button } from "react-bootstrap";
import { kakuroAlgorithmn } from "../services/kakuroAlgorithmn";

const childrenData = [];
let completedBoard = [];

const callbackFunction = (childData) => {
  childrenData.push(childData);
  console.log(childData);
};

const completeBoard = () => {

}
const board = () => {
  let tileRows = [];
  for (let i = 0; i < 5; i++) {
    tileRows.push(
      <Row>
        <Col>
          <Tile
            parentCallback={callbackFunction}
            value={completedBoard.find((e) => {
              return e.position === i + 1;
            })}
            key={i + 1}
            id={i + 1}
          />
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
  return (<Container>
      {tileRows}
      <Button variant="primary" onClick={completedBoard = kakuroAlgorithmn(childrenData)}>Complete Board</Button>
      </Container>);
};
export default board;
