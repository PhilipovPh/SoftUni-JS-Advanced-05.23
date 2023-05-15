function biggestElement(arr) {
    const newArr = [];

    for (const sub of arr) {
        let subNewArr = sub.sort((a, b) => b - a);
        newArr.push(subNewArr.shift());
    }
    let result = newArr.sort((a, b) => b - a).shift();
    return result;
}

biggestElement([[20, 50, 10], [8, 33, 145]]);
console.log('----------');
biggestElement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]);
