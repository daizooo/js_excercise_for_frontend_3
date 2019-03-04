const mainElement = document.getElementById(`main`);
const ulElement = document.createElement(`ul`);
mainElement.appendChild(ulElement);

(() => {
  const taskNumber = 5;
  for (let i = 0; i < taskNumber; i++) {
    const liElement = document.createElement(`li`);
    liElement.textContent = `アイテム` + (i + 1);
    ulElement.appendChild(liElement);
  }
})();

(() => {
  const deleteElement = ulElement.children[3];
  ulElement.removeChild(deleteElement);
})();

(() => {
  const removeAllChild = document.getElementById(`remove-all-items`);
  while (removeAllChild.firstChild) {
    removeAllChild.removeChild(removeAllChild.firstChild);
  }
})();
