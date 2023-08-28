const list = document.querySelector('#categories');
console.log(`Number of categories: ${list.children.length}`);

const listItem = [...list.children];
listItem.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`)
    console.log(`Elements: ${item.lastElementChild.children.length}`);
})