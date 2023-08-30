function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.querySelector('.change-color')
const colorName = document.querySelector('.color')
const body = document.querySelector('body')

changeColor.addEventListener('click', newColor)

function newColor() {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorName.textContent = color;
}