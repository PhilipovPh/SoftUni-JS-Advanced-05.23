function smallestTwoNumbers(arr) {
    let newArr = arr.sort((a, b) => a - b);
    newArr.length = 2;

    console.log(newArr.join(' '));

}
smallestTwoNumbers([30, 15, 50, 5])