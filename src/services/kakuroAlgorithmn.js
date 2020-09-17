export function kakuroAlgorithmn(childrenData) {
  let completedBoard = [];
  do {
    completedBoard = tryFillBoard(childrenData);
    console.log(completedBoard);
  } while (!isBoardCorrect(completedBoard));
  return completedBoard;
}

function tryFillBoard(childrenData) {
  let potentialBoard = [];
  childrenData.forEach((child) => {
    if (child.value.length > 1) {
      potentialBoard.push(child);
    } else if (child.value.length > 0) {
      let randomNum = Math.floor(Math.random() * Math.floor(9)) + 1;
      potentialBoard.push({
        value: [randomNum],
        position: child.position,
      });
    }
  });
  return potentialBoard;
}

export function isBoardCorrect(board) {
  const immutableTiles = board.filter((tile) => tile.value.length > 1);
  for (let index = 0; index < immutableTiles.length; index++) {
    const element = immutableTiles[index];
    if (element.value[0] === -1 && element.value[1] === -1) {
      continue;
    }
    if (element.value.length > 1) {
      if (element.value[0] !== -1) {
        if (!isColumnCorrect(board, element)) {
          return false;
        }
      }
      if (element.value[1] !== -1) {
        if (!isRowCorrect(board, element)) {
          return false;
        }
      }
    }
  }
  return true;
}

function isColumnCorrect(board, element) {
  let i = element.position + 1;
  let total = 0;
  while (i % 7 !== 0) {
    // eslint-disable-next-line
    let tile = board.find((tile) => {
      return tile.position === i;
    });
    if (tile === undefined || tile.value.length > 1) {
      break;
    }
    total += tile.value[0];
    i++;
  }

  return total === element.value[0];
}

function isRowCorrect(board, element) {
  let i = element.position + 6;
  let total = 0;
  while (i < 37) {
    // eslint-disable-next-line
    let tile = board.find((tile) => {
      return tile.position === i;
    });
    if (tile === undefined || tile.value.length > 1) {
      break;
    }
    total += tile.value[0];
    i += 6;
  }
  return total === element.value[1];
}
