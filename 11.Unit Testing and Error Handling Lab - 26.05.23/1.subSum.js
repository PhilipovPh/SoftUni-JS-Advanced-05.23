function subSum(input, start, end) {
    if (!Array.isArray(input)) {
        return NaN;
    }

    let startIndex = Math.max(start, 0);
    let endIndex = Math.min(end, input.length - 1);

    let subNumbers = input.slice(startIndex, endIndex + 1);

    let sum = subNumbers.reduce((a, x) => a + Number(x), 0);
    console.log(sum);
    return sum;
}

subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)