const divElement = document.getElementById('main');
const ulElement = document.createElement('ul');
divElement.appendChild(ulElement);

(() => {
  const liNumbers = 5;
  for (let i = 0; i < liNumbers; i++) {
    const liElement = document.createElement('li');
    liElement.textContent = `アイテム` + (i + 1);
    ulElement.appendChild(liElement);
  }
})();

(() => {
  const removeElement = ulElement.children[3];
  ulElement.removeChild(removeElement);
})();

(() => {
  const removeAllElement = document.getElementById('remove-all-items');
  while (removeAllElement.firstChild) {
    removeAllElement.removeChild(removeAllElement.firstChild);
  }
})();
