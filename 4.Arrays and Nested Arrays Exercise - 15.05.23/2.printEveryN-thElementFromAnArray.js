function printEveryNthElementFromAnArray(arr, step) {
    const result = [];
    for (let i = 0; i < arr.length; i += step) {
        result.push(arr[i]);
    }
    // return result;
    console.log(result);
}
printEveryNthElementFromAnArray(['5',
    '20',
    '31',
    '4',
    '20'],
    2
)