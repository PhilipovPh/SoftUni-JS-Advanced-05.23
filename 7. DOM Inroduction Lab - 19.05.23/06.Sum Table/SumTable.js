function sumTable() {
    let tableElements = document.getElementsByTagName('tr');

    let tableArr = Array.from(tableElements);
    tableArr.shift();
    tableArr.pop();

    let sum = 0;

    for (const line of tableArr) {
        let price = Number(line.children[1].textContent);
        sum += price;
    }

    let totalElement = document.getElementById('sum');
    totalElement.textContent = sum;
}
