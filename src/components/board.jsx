import React, { useState } from "react";
import Tile from "./tile";
import { Container, Col, Row, Button } from "react-bootstrap";
import { kakuroAlgorithmn } from "../services/kakuroAlgorithmn";

const childrenData = [];
const callbackFunction = (childData, submitted) => {
  if (submitted) {
    let index = childrenData.findIndex(
      (child) => child.position === childData.position
    );
    childrenData[index] = childData;
  } else {
    childrenData.push(childData);
  }
};

const completeBoard = (setBoard) => {
  console.log(childrenData);
  setBoard(kakuroAlgorithmn(childrenData));
};
const Board = () => {
  const [completedBoard, setBoard] = useState([]);
  let tileRows = [];
  for (let i = 0; i < 6; i++) {
    tileRows.push(
      <Row>
        <Col>
          <Tile
            parentCallback={callbackFunction}
            completedBoard={completedBoard}
            key={i + 1}
            id={i + 1}
          />
        </Col>
        <Col>
          <Tile
            parentCallback={callbackFunction}
            completedBoard={completedBoard}
            key={i + 6}
            id={i + 6}
          />
        </Col>
        <Col>
          <Tile
            parentCallback={callbackFunction}
            completedBoard={completedBoard}
            key={i + 11}
            id={i + 11}
          />
        </Col>
        <Col>
          <Tile
            parentCallback={callbackFunction}
            completedBoard={completedBoard}
            key={i + 16}
            id={i + 16}
          />
        </Col>
        <Col>
          <Tile
            parentCallback={callbackFunction}
            completedBoard={completedBoard}
            key={i + 21}
            id={i + 21}
          />
        </Col>
        <Col>
          <Tile
            parentCallback={callbackFunction}
            completedBoard={completedBoard}
            key={i + 21}
            id={i + 21}
          />
        </Col>
      </Row>
    );
  }
  return (
    <Container>
      {tileRows}
      <Button variant="primary" onClick={() => completeBoard(setBoard)}>
        Complete Board
      </Button>
    </Container>
  );
};
export default Board;
