//Select the root element.
const rootElement = document.querySelector("#root");

//Create the title
const titleElement = document.createElement("h1");
titleElement.classList.add("title");
titleElement.textContent = "Etch-a-Sketch";
rootElement.appendChild(titleElement);

// Create the button
const buttonElement = document.createElement("button");
buttonElement.classList.add("btn-start");
buttonElement.textContent = "Create New Pad";
rootElement.appendChild(buttonElement);

//Create a new div and added container class and appended to the root
const containerDiv = document.createElement("div");
containerDiv.classList.add("container");
rootElement.appendChild(containerDiv);

//Select the new container div
const container = document.querySelector(".container");

//Create grid
function createNewPad(gridSize) {
  container.innerHTML = "";
  const totalSquares = gridSize * gridSize;
  const squareSize = 800 / gridSize;
  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div"); //Creates new div
    square.classList.add("grid-square"); //Add class to the new square div
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    container.appendChild(square); //Add new element to the container div
  }

  //Add hover effect to squares
  const squareElements = document.querySelectorAll(".grid-square");
  squareElements.forEach((square) => {
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
    });
  });
}
let gridSize = 16;
createNewPad(gridSize);

// Add click event to get user input for new pad
buttonElement.addEventListener("click", () => {
  let userInput = prompt("Enter a number! (max 100)");
  if (userInput > 0 && userInput < 100) {
    gridSize = userInput;
    createNewPad(gridSize);
  } else {
    alert("Enter a valid number!");
  }
});
