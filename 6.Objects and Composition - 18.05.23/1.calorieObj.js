function calorieObj(arr) {
    let resultObj = {};

    for (let i = 0; i < arr.length; i += 2) {
        resultObj[arr[i]] = Number(arr[i + 1]);

    }
    return resultObj;

}

calorieObj(['Yoghurt', '48', 'Rise', '138',
    'Apple', '52']);