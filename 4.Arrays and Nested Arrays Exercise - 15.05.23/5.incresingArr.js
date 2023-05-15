function increasingArr(arr) {
    let biggest = Number.MAX_SAFE_INTEGER;
    const output = [];

    for (let i = 0; i < arr.length; i++) {
        const currentEl = arr[i];

        if (currentEl >= biggest) {
            output.push(currentEl);
            biggest = currentEl;
        }
    }
    return output;
}


function increasingArr(arr) {
    let biggest = -Infinity;
    const output = [];

    for (let i = 0; i < arr.length; i++) {
        const currentEl = arr[i];

        if (currentEl >= biggest) {
            output.push(currentEl);
            biggest = currentEl;
        }
    }

    return output;
}

console.log(increasingArr([1, 3, 8, 4, 10, 12, 3, 2, 24]));

increasingArr([1,
    3,
    8,
    4, 10,
    12,
    3,
    2,
    24]
)

increasingArr([20,
    3,
    2,
    15,
])