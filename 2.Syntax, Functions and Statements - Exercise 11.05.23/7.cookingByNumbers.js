function cookingByNumbers(number, op1, op2, op3, op4, op5) {
    let numb = Number(number);
    let arr = [];
    arr.push(op1, op2, op3, op4, op5);

    for (const operation of arr) {
        switch (operation) {
            case 'chop':
                numb /= 2;
                console.log(numb);
                break;
            case 'dice':
                numb = Math.sqrt(number);
                console.log(numb);
                break;
            case 'spice':
                numb += 1;
                console.log(numb);
                break;
            case 'bake':
                numb *= 3;
                console.log(numb);
                break;
            case 'fillet':
                numb *= 0.8;
                console.log(numb);
        }
    }
}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')