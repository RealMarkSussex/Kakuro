export function kakuroAlgorithmn(childrenData) {
  let completedBoard = [];
  childrenData.forEach((element) => {
    if (element.value.length > 1) {
      console.log("hi")
      completedBoard.push(element);
    } else {
        completedBoard.push({
            value: ["1"],
            position: element.position
        })
    }
  });
  return completedBoard;
}

function isBoardCorrect() {

}

function tryFillBoard(childrenData) {
  let randomNum = Math.floor(Math.random() * Math.floor(10));
  childrenData.forEach(child => {

  });
}
