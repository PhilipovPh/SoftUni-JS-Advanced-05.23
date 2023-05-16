function diagonalAttack(arr) {
    
    function printMatrix() {
        for (let row = 0; row < result.length; row++) {
            console.log(result[row].join(' '));
        }
    }

    const result = arr.reduce((acc, str) => {
        const subArr = str.split(' ').map(Number);
        acc.push(subArr);
        return acc;
    }, []);
    let mainSum = 0;
    let secondarySum = 0;

    for (let i = 0; i < result.length; i++) {
        mainSum += result[i][i];
        secondarySum += result[i][result.length - 1 - i];
    }

    if (mainSum === secondarySum) {
        for (let row = 0; row < result.length; row++) {
            for (let col = 0; col < result.length; col++) {
                if (row !== col && row !== result.length - 1 - col) {
                    result[row][col] = mainSum;
                }
            }
        }
        printMatrix();
    } else {
        printMatrix();
    }
}

diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);
