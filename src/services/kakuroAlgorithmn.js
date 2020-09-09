export function kakuroAlgorithmn(childrenData) {
  let completedBoard = [];
  childrenData.forEach((element) => {
    if (!(element.value[0] > 0 && element.value[1] > 0)) {
      completedBoard.push(element);
    } else {
        completedBoard.push({
            value: [1, 1],
            position: element.position
        })
    }
  });
  return completedBoard;
}
