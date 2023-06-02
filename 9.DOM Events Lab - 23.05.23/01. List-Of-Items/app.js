function addItem() {
    const listElement = document.getElementById('items');
    const inputElement = document.getElementById('newItemText');

    let newLiElement = document.createElement('li');

    newLiElement.textContent = inputElement.value;
    listElement.appendChild(newLiElement);
}