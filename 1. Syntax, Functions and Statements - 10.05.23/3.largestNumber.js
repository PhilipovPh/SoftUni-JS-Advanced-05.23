function largestNumber(numb1, numb2, numb3) {
    let result = 0;
    if (numb1 > numb2 && numb1 > numb3) {
        result = numb1
    } else if (numb2 > numb3) {
        result = numb2;
    } else {
        result = numb3;
    }

    console.log(`The largest number is ${result}.`);
}
largestNumber(5, 16, -16)