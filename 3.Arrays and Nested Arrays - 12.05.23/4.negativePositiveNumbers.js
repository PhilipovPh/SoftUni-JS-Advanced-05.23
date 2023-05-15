function negativePositiveNumbers(arr) {
    let newArr = [];

    for (const check of arr) {
        if (check < 0) {
            newArr.unshift(check);
        } else {
            newArr.push(check);
        }

    }

    for (const digit of newArr) {
        console.log(digit);
    }
}

negativePositiveNumbers([7, -2, 8, 9]);