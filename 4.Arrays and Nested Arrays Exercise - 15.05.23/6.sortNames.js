function sortNames(arr) {
    const sortedArr = arr.sort((a, b) => a.localeCompare(b));
    sortedArr.forEach((name, index) => console.log(`${index + 1}.${name}`));
}
