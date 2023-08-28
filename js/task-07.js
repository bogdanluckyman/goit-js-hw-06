const controlInput = document.querySelector('input')
const text = document.querySelector('span')

controlInput.addEventListener('input', changeRange)

function changeRange(event) {
    const fontSize = event.currentTarget.value + 'px';
    text.style.fontSize = fontSize
}