function greatestCommonDivisor(numb1, numb2) {
    while (numb2) {
        const temp = numb2;
        numb2 = numb1 % numb2;
        numb1 = temp;
    }
    console.log(numb1);
}

greatestCommonDivisor(2154, 458);