function calc() {
    let firstNumbElement = document.getElementById('num1');
    let secondNumbElement = document.getElementById('num2');

    let resultElement = document.getElementById('sum');

    let firstNumb = Number(firstNumbElement.value);
    let secondNumb = Number(secondNumbElement.value);

    let sum = firstNumb + secondNumb;

    resultElement.value = sum;
}
