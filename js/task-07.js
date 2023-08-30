const controlInput = document.querySelector('input')
const text = document.querySelector('span')

controlInput.addEventListener('input', changeRange)

function changeRange() {
    const fontSize = controlInput.value + 'px';
    text.style.fontSize = fontSize
}
changeRange()
