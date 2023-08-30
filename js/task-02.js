const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');
const fragment = document.createDocumentFragment(); 
ingredients.forEach(item => {
  const liItem = document.createElement('li');
  liItem.textContent = item;
  liItem.classList.add('item');
  fragment.appendChild(liItem);
});

list.appendChild(fragment);