const sketchpad = document.querySelector(".sketchpad");

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

const generateSketchpad = (numOfSquares) => {
  let squareGridSize = numOfSquares > 100 ? 100 : numOfSquares;

  sketchpad.style.gridTemplateRows = `repeat(${squareGridSize}, 1fr)`;
  sketchpad.style.gridTemplateColumns = `repeat(${squareGridSize}, 1fr)`;
  for (let i = 0; i < squareGridSize * squareGridSize; i++) {
    sketchpad.appendChild(createDiv());
  }
};

generateSketchpad(16);

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

const sketchpadBoxes = document.querySelectorAll(".sketchpad-box");

sketchpadBoxes.forEach((box) => {
  const changeRGB = changeColor();

  box.addEventListener("click", (event) => {
    event.currentTarget.style.backgroundColor = changeRGB();
  });
});
