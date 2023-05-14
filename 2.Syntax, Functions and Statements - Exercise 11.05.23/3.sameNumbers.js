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
    let sum = 0;
    for (let i = 0; i < stringifiedNumb.length; i++) {
        sum += Number(stringifiedNumb[i]);

    }
    console.log(isTrue);
    console.log(sum);
}

sameNumbers(2222222);