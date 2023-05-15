function rotateArr(arr, rotation) {
    for (let i = 0; i < rotation; i++) {
        let currentRotation = arr.pop();
        arr.unshift(currentRotation);

    }
    console.log(arr.join(' '));
}

rotateArr(['1', '2', '3', '4'], 2)