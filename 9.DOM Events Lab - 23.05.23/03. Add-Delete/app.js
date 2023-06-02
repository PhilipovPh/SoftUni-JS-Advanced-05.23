function addItem() {
    let itemElements = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');

    let newElement = document.createElement('li');
    newElement.textContent = inputElement.value;
    inputElement.value = '';

    let deleteButton = document.createElement('a');
    deleteButton.href = '#';
    deleteButton.textContent = '[Delete]';
    deleteButton.addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove();
    });

    newElement.appendChild(deleteButton);
    itemElements.appendChild(newElement);
}