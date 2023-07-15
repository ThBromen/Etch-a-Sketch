const gridContainer = document.querySelector(".grid");
const gridSizeInput = document.querySelector("#gridSizeInput");
const createButton = document.querySelector("#createButton");

createButton.addEventListener("click", function () {
  let gridSize = parseInt(gridSizeInput.value);
  let numColumns = gridSize;
  let numRows = gridSize;
  let isDrawing = false;
  let drawColor = "#000";

  function createGrid() {
    let gridHTML = "";

    gridContainer.style.gridTemplateColumns = `repeat(${numColumns}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${numRows}, 1fr)`;

    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numColumns; j++) {
        gridHTML += "<div></div>";
      }
    }
    for (let i = 0; i < gridSize * gridSize; i++) {
      const div = document.createElement("div");
      gridContainer.appendChild(div);
    }

    gridContainer.innerHTML = gridHTML;
  }
  if (gridSize < 100) {
    createGrid();
  } else {
    alert("wrong input");
  }
  // Event listeners for drawing functionality
  gridContainer.addEventListener("mousedown", startDrawing);
  gridContainer.addEventListener("mouseup", stopDrawing);
  gridContainer.addEventListener("mouseleave", stopDrawing);
  gridContainer.addEventListener("mousemove", draw);

  function startDrawing(event) {
    isDrawing = true;
    draw(event);
  }

  function stopDrawing() {
    isDrawing = false;
  }

  function draw(event) {
    if (!isDrawing) return;

    const cell = event.target;
    cell.style.backgroundColor = drawColor;
  }

  // Button event listener for switching between drawing and erasing modes
  const drawButton = document.querySelector("#drawButton");
  const drawRgbButton = document.querySelector("#drawRgbButton");

  drawButton.addEventListener("click", function () {
    drawButton.textContent = "Draw (Black)";
    drawColor = "#000"; // Change to black for drawing mode
  });

  drawRgbButton.addEventListener("click", function () {
    drawButton.textContent = "Draw (RGB)";
    drawColor = getRandomColor(); // Change to random RGB color for drawing mode
  });

  // Helper function to generate random RGB color
  function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
});
