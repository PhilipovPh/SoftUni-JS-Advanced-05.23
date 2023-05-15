function biggerHalf(arr) {
    let newArr = arr.sort((a, b) => a - b);

    if (newArr.length % 2 == 0) {
        let result = newArr.slice(newArr.length / 2);
        return result;
    } else {
        let result = newArr.slice((Math.floor(newArr.length) / 2));
        return result;
    }
}

biggerHalf([4, 7, 2, 5]);
console.log('-----------');
biggerHalf([3, 19, 14, 7, 2, 19, 6])