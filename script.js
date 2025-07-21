// Your code here.
const container = document.querySelector('.items');
const cubes = document.querySelectorAll('.item');

let selectedCube = null;
let offsetX = 0;
let offsetY = 0;

// Handle mouse down
cubes.forEach(cube => {
  cube.addEventListener('mousedown', (e) => {
    selectedCube = cube;

    // Get mouse position inside the cube
    offsetX = e.clientX - cube.offsetLeft;
    offsetY = e.clientY - cube.offsetTop;

    cube.style.zIndex = 1000; // bring to front
    cube.style.transition = 'none';
  });
});

// Handle mouse move
document.addEventListener('mousemove', (e) => {
  if (!selectedCube) return;

  // New position (constrained to container)
  const containerRect = container.getBoundingClientRect();

  let x = e.clientX - containerRect.left - offsetX;
  let y = e.clientY - containerRect.top - offsetY;

  // Boundaries
  x = Math.max(0, Math.min(container.offsetWidth - selectedCube.offsetWidth, x));
  y = Math.max(0, Math.min(container.offsetHeight - selectedCube.offsetHeight, y));

  selectedCube.style.left = ${x}px;
  selectedCube.style.top = ${y}px;
});

// Handle mouse up
document.addEventListener('mouseup', () => {
  if (selectedCube) {
    selectedCube.style.zIndex = 1;
    selectedCube = null;
  }
});