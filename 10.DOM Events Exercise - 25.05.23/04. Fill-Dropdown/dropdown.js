function addItem() {
    const inputTextElement = document.getElementById('newItemText');
    const inputValueElement = document.getElementById('newItemValue');
    const menu = document.getElementById('menu');

    const optionMenu = document.createElement('option');

    optionMenu.textContent = inputTextElement.value;
    optionMenu.value = inputValueElement.value;

    menu.appendChild(optionMenu);

    inputTextElement.value = "";
    inputValueElement.value = "";
}