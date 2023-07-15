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

  createGrid(); // Event listeners for drawing functionality
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

  drawButton.addEventListener("click", function () {
    if (drawButton.textContent === "Draw") {
      drawButton.textContent = "Erase";
      drawColor = "#fff"; // Change to white for erasing mode
    } else {
      drawButton.textContent = "Draw";
      drawColor = "#000"; // Change to black for drawing mode
    }
  });
});
