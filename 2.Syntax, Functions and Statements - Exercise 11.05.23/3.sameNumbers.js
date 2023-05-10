function sameNumbers(number) {
    let stringifiedNumb = String(number);
    let isTrue = true;

    for (let i = 1; i < stringifiedNumb.length; i++) {
        if (stringifiedNumb[i - 1] === stringifiedNumb[i]) {
            isTrue = true;
        } else {
            isTrue = false;
            break;
        }

    }
    console.log(isTrue);
}

sameNumbers(22223222);