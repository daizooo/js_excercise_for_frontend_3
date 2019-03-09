const divElement = document.getElementById('main');
const ulElement = document.createElement('ul');
divElement.appendChild(ulElement);

(() => {
  const liNumber = 5;
  for (let i = 0; i < liNumber; i++) {
    const liElement = document.createElement('li');
    liElement.textContent = 'アイテム' + (i + 1);
    ulElement.appendChild(liElement);
  }
})();

(() => {
  const elementNumber = ulElement.children[3];
  ulElement.removeChild(elementNumber);
})();

(() => {
  const removeAll = document.getElementById('remove-all-items');
  while (removeAll.firstChild) {
    removeAll.removeChild(removeAll.firstChild);
  }
})();
