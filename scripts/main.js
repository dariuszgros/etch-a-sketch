const gameContainer = document.querySelector(".game-container");
const blackColor = document.querySelector(".black");
const whiteColor = document.querySelector(".white");
const pickColor = document.getElementById("color");
const randomColor = document.querySelector(".random");
const resetButton = document.querySelector(".reset");

let colorPick = [];
let colorTheme = [];
let slider = document.getElementById("slider");
let currentState = false;

function divCreate(sliderValue) {
  gameContainer.style.display = "grid";
  gameContainer.style.gridTemplateColumns = `repeat(${sliderValue}, 1fr)`;
  gameContainer.style.gridTemplateRows = `repeat(${sliderValue}, 1fr)`;
  for (let i = 1; i <= sliderValue * sliderValue; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("cell");
    newDiv.style.border = "0.3px solid rgb(220, 220, 220)";
    newDiv.style.background = "white";
    gameContainer.appendChild(newDiv);
  }
  gameContainer.addEventListener("click", toggleDrawing);
}
divCreate(16);

function toggleDrawing() {
  const cells = document.querySelectorAll(".cell");

  if (!currentState) {
    cells.forEach((cell) => {
      cell.addEventListener("mouseenter", optionChoice);
    });
    currentState = true;
  } else {
    cells.forEach((cell) => {
      cell.removeEventListener("mouseenter", optionChoice);
    });
    currentState = false;
  }
}

blackColor.addEventListener("click", function () {
  colorTheme = "black";
});
whiteColor.addEventListener("click", function () {
  colorTheme = "white";
});
pickColor.addEventListener("click", function () {
  colorTheme = "color";
});
randomColor.addEventListener("click", function () {
  colorTheme = "random";
});

function optionChoice(e) {
  switch (colorTheme) {
    case "black":
      colorPick = "black";
      e.target.style.backgroundColor = colorPick;
      break;
    case "white":
      colorPick = "white";
      e.target.style.backgroundColor = colorPick;
      break;
    case "color":
      let userColor = document.getElementById("userColor");
      userColor = userColor.value;
      e.target.style.backgroundColor = userColor;
      break;
    case "random":
      let randomNumber = ~~(Math.random() * 360);
      colorPick = `hsl(${randomNumber}, 100%, 50%)`;
      e.target.style.backgroundColor = colorPick;
      break;
  }
}

function changeGrid() {
  let currentGridSize = document.querySelectorAll(".cell");
  currentGridSize.forEach((div) => {
    return div.remove();
  });
  divCreate(slider.value);
}

slider.addEventListener("mouseup", changeGrid);

resetButton.addEventListener("click", function () {
  let currentGridSize = document.querySelectorAll(".cell");
  currentGridSize.forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
});
