const ulElement = document.createElement(`ul`);
const mainElement = document.getElementById(`main`);
mainElement.appendChild(ulElement);

(() => {
  const liNumber = 5;
  for (let i = 0; liNumber > i; i++) {
    const liElement = document.createElement(`li`);
    liElement.textContent = `アイテム` + (i + 1);
    ulElement.appendChild(liElement);
  }
})();

(() => {
  const deleteLiElement = ulElement.children[3];
  ulElement.removeChild(deleteLiElement);
})();

(() => {
  const removeElement = document.getElementById(`remove-all-items`);
  while (removeElement.firstChild) {
    removeElement.removeChild(removeElement.firstChild);
  }
})();
