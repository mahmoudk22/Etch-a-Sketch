const container = document.querySelector('.grid-container');
const newGridBtn = document.querySelector('#new-grid-btn');
const colorPicker = document.querySelector('#color-picker');

let isDrawing = false;
let selectedColor = '#000000';

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
    target.style.backgroundColor = selectedColor;
  }
}

function handleNewGrid() {
  let size = prompt('Enter the number of squares per side for the new grid (maximum 100):');
  if (size > 100) {
    size = 100;
  }
  createGrid(size);
}

function handleColorChange() {
  selectedColor = colorPicker.value;
}

createGrid(16);

container.addEventListener('mousedown', handleMouseDown);
container.addEventListener('mouseup', handleMouseUp);
container.addEventListener('mouseover', handleMouseOver);

newGridBtn.addEventListener('click', handleNewGrid);
colorPicker.addEventListener('input', handleColorChange);
