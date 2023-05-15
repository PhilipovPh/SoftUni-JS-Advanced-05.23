function processOddPositions(arr) {
    let newArr = [];

    for (let i = 1; i < arr.length; i += 2) {
        newArr.unshift(arr[i]);
    }

    console.log(newArr.map(a => a * 2).join(' '));
}

processOddPositions([3, 0, 10, 4, 7, 3])