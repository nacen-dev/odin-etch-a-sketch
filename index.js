const createDiv = () => {
  const newDiv = document.createElement("div");
  newDiv.className = "sketchpad-box";
  return newDiv;
};

const randomNumBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateRandomRGB = () => {
  const red = randomNumBetween(0, 100);
  const green = randomNumBetween(0, 100);
  const blue = randomNumBetween(0, 100);
  return `rgb(${red}%, ${green}%, ${blue}%)`;
};

const generateSketchpadBoxes = (numOfSquares) => {
  sketchpad.style.gridTemplateRows = `repeat(${numOfSquares}, 1fr)`;
  sketchpad.style.gridTemplateColumns = `repeat(${numOfSquares}, 1fr)`;
  for (let i = 0; i < numOfSquares * numOfSquares; i++) {
    sketchpad.appendChild(createDiv());
  }
  console.log(numOfSquares*numOfSquares);
};

const decimalFormat = (num = 0, numOfDecimal = 2) => {
  let format =
    Math.round(num * Math.pow(10, numOfDecimal)) / Math.pow(10, numOfDecimal);
  return format;
};

const changeColor = () => {
  let isColorChanged = false;
  let rgbValue = "";
  let rgbValues = [];
  let count = 0;

  const rgbTenPercent = {
    red: 0,
    green: 0,
    blue: 0,
  };

  const changeRGB = () => {
    if (!isColorChanged) {
      isColorChanged = true;
      rgbValue = generateRandomRGB();
      rgbValues = rgbValue.match(/\d+/g);
      rgbTenPercent["red"] = decimalFormat(rgbValues[0] * 0.1);
      rgbTenPercent["green"] = decimalFormat(rgbValues[1] * 0.1);
      rgbTenPercent["blue"] = decimalFormat(rgbValues[2] * 0.1);
    } else {
      count++;
      let [red, green, blue] = rgbValues;

      red =
        red - rgbTenPercent["red"] <= 0
          ? 0
          : decimalFormat(red - rgbTenPercent["red"]);
      green =
        green - rgbTenPercent["green"] < 0
          ? 0
          : decimalFormat(green - rgbTenPercent["green"]);
      blue =
        blue - rgbTenPercent["blue"] < 0
          ? 0
          : decimalFormat(blue - rgbTenPercent["blue"]);

      rgbValues = [red, green, blue];

      rgbValue = `rgb(${red}%, ${green}%, ${blue}%)`;
    }

    return rgbValue;
  };

  return changeRGB;
};

const addChangeColorEvent = (sketchpadBoxes) => {
  sketchpadBoxes.forEach((box) => {
    const changeRGB = changeColor();

    box.addEventListener("mouseover", (event) => {
      event.currentTarget.style.backgroundColor = changeRGB();
    });
  });
};

const clearGrid = () => {
  const sketchpadBoxes = document.querySelectorAll(".sketchpad-box");
  sketchpadBoxes.forEach((box) => {
    box.remove();
  });

  let userInput = 0;
  const userLimitInput = 100;

  do {
    userInput = Number(
      prompt("Enter the number of squares per side for the new grid: 1-100")
    );
  } while (userInput > userLimitInput || userInput <= 0);

  generateSketchpadBoxes(userInput);
  const boxes = document.querySelectorAll(".sketchpad-box");
  addChangeColorEvent(boxes);
};

const defaultSquareSize = 16;
const clearGridButton = document.querySelector(".clear-grid");
const sketchpad = document.querySelector(".sketchpad");

generateSketchpadBoxes(defaultSquareSize);

const sketchpadBoxes = document.querySelectorAll(".sketchpad-box");
addChangeColorEvent(sketchpadBoxes);

clearGridButton.addEventListener("click", clearGrid);
