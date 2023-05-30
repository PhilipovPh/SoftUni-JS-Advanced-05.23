function subtract() {
    let firstElement = document.getElementById('firstNumber');
    let secondElemnt = document.getElementById('secondNumber');

    let sum = Number(firstElement.value) - Number(secondElemnt.value);

    let resultElement = document.getElementById('result');

    resultElement.textContent = sum;
}