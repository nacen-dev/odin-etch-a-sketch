const sketchpad = document.querySelector(".sketchpad");

const createDiv = () => {
  const newDiv = document.createElement("div");
  newDiv.className = "sketchpad-box"
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

const sketchpadBoxes = document.querySelectorAll(".sketchpad-box");

sketchpadBoxes.forEach(box => {
  box.addEventListener("click", (event) => {
    event.currentTarget.style.backgroundColor = "rgb(100%, 80%, 100%)";
  })
});

