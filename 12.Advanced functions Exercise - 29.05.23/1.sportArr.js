function sortArr(input, type) {
    const constructor = {
        'asc': (a, b) => a - b,
        'desc': (a, b) => b - a
    }
    return input.sort(constructor[type])
}

sortArr([14, 7, 17, 6, 8], 'asc')