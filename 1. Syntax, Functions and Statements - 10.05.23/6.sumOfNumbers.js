function sumOfNumbers(n1, n2) {
    let startNumb = Number(n1)
    let endNumb = Number(n2)

    let sum = 0

    for (let i = startNumb; i <= endNumb; i++) {
        let currentNumber = i
        sum += currentNumber
    }
    console.log(sum)
}

sumOfNumbers('-8', '20')
