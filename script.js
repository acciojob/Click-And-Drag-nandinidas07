// Select the container and all cube items
const container = document.querySelector('.items');
const cubes = document.querySelectorAll('.item');

// Track which cube is being dragged
let selectedCube = null;
let offsetX = 0;
let offsetY = 0;

// Add mousedown listener to each cube
cubes.forEach(cube => {
  cube.addEventListener('mousedown', (e) => {
    selectedCube = cube;

    // Calculate offset between mouse and cube corner
    offsetX = e.clientX - cube.offsetLeft;
    offsetY = e.clientY - cube.offsetTop;

    // Bring to front
    cube.style.zIndex = 1000;
    cube.style.transition = 'none';

    // Prevent text selection while dragging
    e.preventDefault();
  });
});

// Move the cube as the mouse moves
document.addEventListener('mousemove', (e) => {
  if (!selectedCube) return;

  // Get container's position relative to viewport
  const containerRect = container.getBoundingClientRect();

  // Calculate new position within container
  let x = e.clientX - containerRect.left - offsetX;
  let y = e.clientY - containerRect.top - offsetY;

  // Constrain movement within boundaries
  x = Math.max(0, Math.min(container.offsetWidth - selectedCube.offsetWidth, x));
  y = Math.max(0, Math.min(container.offsetHeight - selectedCube.offsetHeight, y));

  // Apply new position
  selectedCube.style.left = ${x}px;
  selectedCube.style.top = ${y}px;
});

// Stop dragging on mouse up
document.addEventListener('mouseup', () => {
  if (selectedCube) {
    selectedCube.style.zIndex = 1;
    selectedCube = null;
  }
});