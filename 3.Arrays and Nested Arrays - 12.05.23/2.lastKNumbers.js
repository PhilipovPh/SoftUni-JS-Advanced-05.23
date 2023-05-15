function lastKNumbers(n, k) {
    let resultArr = [1];

    for (let i = 1; i < n; i++) {
        let tempSum = 0;
        for (let j = i; j >= i - k; j--) {
            if (resultArr[j] !== undefined) {
                tempSum += resultArr[j];
            }
        }
        resultArr.push(tempSum);
    }
    return resultArr;
}


lastKNumbers(6, 3)