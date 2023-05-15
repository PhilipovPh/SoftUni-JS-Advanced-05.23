function sortByTwoCriteria(arr) {
    const sortedArr = arr.sort((a, b) => {
        const firstCriteria = a.length - b.length;
        const secondCriteria = a.localeCompare(b);
        return firstCriteria || secondCriteria;
    });
    console.log(sortedArr.join('\n'));
}

sortByTwoCriteria(['alpha', 'beta', 'gamma'])