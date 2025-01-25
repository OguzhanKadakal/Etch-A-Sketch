//Select the root element.
const rootElement = document.querySelector("#root");

//Create a new div and added container class and appended to the root
const containerDiv = document.createElement("div");
containerDiv.classList.add("container");
rootElement.appendChild(containerDiv);

//Select the new container div
const container = document.querySelector(".container");

//Create 16*16 grid = 256 squares
const gridSize = 16;
const totalSquares = gridSize * gridSize;

for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div"); //Creates new div
    square.classList.add("grid-square"); //Add class to the new square div
    container.appendChild(square); //Add new element to the container div
}

//Add hover effect to squares
const squareElements = document.querySelectorAll(".grid-square");
squareElements.forEach(square => {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "red";
    });
});

