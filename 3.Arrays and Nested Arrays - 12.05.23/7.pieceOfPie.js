function pieceOfPie(arr, first, last) {
    let newArr = [];
    let startPosition = arr.indexOf(first);
    let endPosition = arr.indexOf(last);

    for (let i = startPosition; i <= endPosition; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}

pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
)
console.log('------------');
pieceOfPie(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie')