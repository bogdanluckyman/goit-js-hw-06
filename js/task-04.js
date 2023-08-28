const counter = document.querySelector('#counter');
const value = document.querySelector('#value');
let counterValue = 0;

counter.firstElementChild.addEventListener('click', clickDecrement);
counter.lastElementChild.addEventListener('click', clickIncrement);

function clickDecrement() {
    counterValue -= 1;
    value.textContent = counterValue;
}
function clickIncrement() {
    counterValue += 1;
    value.textContent = counterValue;
}
