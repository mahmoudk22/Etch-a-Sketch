const container = document.querySelector('.grid-container');
const newGridBtn = document.querySelector('#new-grid-btn');

let isDrawing = false;

function createGrid(size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.innerHTML = '';
  for (let i = 0; i < size * size; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    container.appendChild(gridItem);
  }
}

function handleMouseDown() {
  isDrawing = true;
}

function handleMouseUp() {
  isDrawing = false;
}

function handleMouseOver(event) {
  if (isDrawing) {
    const target = event.target;
    target.style.backgroundColor = getRandomColor();
  }
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function handleNewGrid() {
  let size = prompt("Enter the number of squares per side for the new grid (maximum 100):");
  if (size > 100) {
    size = 100;
  }
  createGrid(size);
}

createGrid(16);

container.addEventListener('mousedown', handleMouseDown);
container.addEventListener('mouseup', handleMouseUp);
container.addEventListener('mouseover', handleMouseOver);

newGridBtn.addEventListener('click', handleNewGrid);