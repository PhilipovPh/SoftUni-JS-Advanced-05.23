function squareOfStars(params) {

    for (let i = 0; i < params; i++) {
        let line = ''
        for (let j = 0; j < params; j++) {
            line += '* '

        }
        console.log(line.trim());
    }
}

squareOfStars(2);