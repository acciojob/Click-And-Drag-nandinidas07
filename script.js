const container = document.querySelector('.items');
const cubes = document.querySelectorAll('.item');

let selectedCube = null;
let offsetX = 0;
let offsetY = 0;

cubes.forEach(cube => {
  cube.addEventListener('mousedown', (e) => {
    selectedCube = cube;
    offsetX = e.clientX - cube.offsetLeft;
    offsetY = e.clientY - cube.offsetTop;

    cube.style.zIndex = 1000;
    cube.style.transition = 'none';
    e.preventDefault(); // prevent text selection
  });
});

document.addEventListener('mousemove', (e) => {
  if (!selectedCube) return;

  const rect = container.getBoundingClientRect();
  let x = e.clientX - rect.left - offsetX;
  let y = e.clientY - rect.top - offsetY;

  // Constrain inside container
  x = Math.max(0, Math.min(container.offsetWidth - selectedCube.offsetWidth, x));
  y = Math.max(0, Math.min(container.offsetHeight - selectedCube.offsetHeight, y));

  selectedCube.style.left = ${x}px;
  selectedCube.style.top = ${y}px;
});

document.addEventListener('mouseup', () => {
  if (selectedCube) {
    selectedCube.style.zIndex = 1;
    selectedCube = null;
  }
});