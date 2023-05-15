function evenNumber(arr) {
    let resultArr = [];
    for (let i = 0; i < arr.length; i += 2) {
        let position = arr[i];
        resultArr.push(position);
    }
    console.log(resultArr.join(' '));
}

evenNumber(['20', '30', '40', '50', '60']);