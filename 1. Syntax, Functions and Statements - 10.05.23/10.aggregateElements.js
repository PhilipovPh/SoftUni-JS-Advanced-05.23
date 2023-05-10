function aggregateElements(input) {
    let sum = 0;
    let inverseSum = 0;
    let stringSum = '';
    for (const number of input) {
        sum += Number(number);
        inverseSum += 1 / Number(number);
        stringSum += String(number);
    }
    console.log(sum);
    console.log(inverseSum);
    console.log(stringSum);
}

aggregateElements([2, 4, 8, 16])