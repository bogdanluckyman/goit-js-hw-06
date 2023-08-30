function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const controls = document.querySelector('#controls');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');
const input = controls.querySelector('input');

const min = Number(input.min);
const max = Number(input.max);
const step = Number(input.step);

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = Number(input.value);

  if (isNaN(amount) || amount < min || amount > max) {
    return;
  }

  const boxes = [];

  for (let i = 0; i < amount; i += step) {
    const box = document.createElement('div');
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}