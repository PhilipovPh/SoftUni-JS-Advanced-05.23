function diagonalSums(arr) {
    let mainSum = 0;
    let secondarySum = 0;

    for (let i = 0; i < arr.length; i++) {
        mainSum += arr[i][i]; // Sum of main diagonal elements
        secondarySum += arr[i][arr.length - 1 - i]; // Sum of secondary diagonal elements
    }

    console.log(mainSum, secondarySum);
}


diagonalSums([[20, 40], [10, 60]]);
console.log('-------------');
diagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);