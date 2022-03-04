const sketchpad = document.querySelector(".sketchpad");

const createDiv = () => {
  const newDiv = document.createElement("div");
  return newDiv;
};

const generateSketchpad = (numOfSquares) => {
  let squareGridSize = numOfSquares * numOfSquares;
  if (numOfSquares > 100) {
    squareGridSize = 100 * 100;
  }
  for (let i = 0; i < squareGridSize; i++) {
    sketchpad.appendChild(createDiv());
  }
}

generateSketchpad(20);