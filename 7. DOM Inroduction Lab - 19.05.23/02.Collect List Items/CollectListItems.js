function extractText() {
    let textElement = document.getElementById('items');
    let newPosition = document.getElementById('result');

    newPosition.textContent = textElement.textContent;
}