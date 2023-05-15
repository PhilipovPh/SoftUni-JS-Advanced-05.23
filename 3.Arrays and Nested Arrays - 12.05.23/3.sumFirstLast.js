function sumFirstLast(arr) {
    let result = Number(arr.pop()) + Number(arr.shift());
    return result;
}