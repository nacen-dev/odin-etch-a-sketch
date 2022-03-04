const sketchpad = document.querySelector(".sketchpad");

const createDiv = () => {
  const newDiv = document.createElement("div");
  newDiv.className = "sketchpad-box"
  return newDiv;
};

const randomNumBetween = (min, max) => {
  return Math.floor(Math.random() * (max-min + 1) + min);
}

const generateRandomRGB = () => {
  const red = randomNumBetween(0, 100);
  const green = randomNumBetween(0, 100);
  const blue = randomNumBetween(0, 100);
  return `rgb(${red}%, ${green}%, ${blue}%)`
}


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
  box.addEventListener("mouseenter", (event) => {
    event.currentTarget.style.backgroundColor = "rgb(100%, 80%, 100%)";
  })
});

