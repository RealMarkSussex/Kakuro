export function kakuroAlgorithmn(childrenData) {
  let completedBoard = [];
  do {
    completedBoard = tryFillBoard(childrenData);
  } while(!isBoardCorrect(completedBoard))
  return completedBoard;
}

function tryFillBoard(childrenData) {
  let potentialBoard = [];
  childrenData.forEach(child => {
    if(child.value.length > 1) {
      potentialBoard.push(child);
    }
    else if(child.value.length > 0) {
      let randomNum = Math.floor(Math.random() * Math.floor(9)) + 1;
      potentialBoard.push({
        value: [randomNum],
        position: child.position
      })
    }
  });
  return potentialBoard;
}

function isBoardCorrect(board) {
  let isCorrect = true;
  const immutableTiles = board.filter(tile => tile.value.length > 1);
  for (let index = 0; index < immutableTiles.length; index++) {
    const element = immutableTiles[index];
    if(element[0] === -1 && element[1] === -1) {
      continue;
    }
  }
  return isCorrect;
}
