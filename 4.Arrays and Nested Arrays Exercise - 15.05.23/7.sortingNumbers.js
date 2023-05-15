function sortingNumbers(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let result = []

    while (sortedArr.length !== 0) {
        let firstEl = sortedArr.shift();
        let lastEl = sortedArr.pop();
        result.push(firstEl, lastEl);
    }

    return result;
}