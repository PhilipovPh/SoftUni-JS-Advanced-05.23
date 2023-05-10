function greatestCommonDivisor(numb1, numb2) {
    let commonNumb = 1;
    let smallNumb = 0
    if (numb1 > numb2) {
        smallNumb = numb2;
    } else {
        smallNumb = numb1;
    }

    for (let i = 1; i <= smallNumb; i++) {
        if (numb1 % i == 0 && numb2 % i == 0) {
            commonNumb = i;
        }

    }
    console.log(commonNumb);
}

greatestCommonDivisor(2154, 458);