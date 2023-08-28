const inputText = document.querySelector('input')

inputText.addEventListener('blur', validSymbols)

function validSymbols(event) {
    if (event.currentTarget.value.length ===
        Number(inputText.dataset.length)) {
        inputText.classList.remove('invalid')
        inputText.classList.add('valid')
    } else {
        inputText.classList.remove('valid')
        inputText.classList.add('invalid')
    }
}