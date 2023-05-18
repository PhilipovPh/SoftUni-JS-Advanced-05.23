function townPopulation(arr) {
    let townInfo = {};

    for (const town of arr) {
        let townArr = town.split(' <-> ');
        let townName = townArr[0];
        let population = Number(townArr[1]);

        if (!townInfo[townName]) {
            townInfo[townName] = 0;
        }

        townInfo[townName] += population;
    }

    for (const position in townInfo) {
        console.log(`${position} : ${townInfo[position]}`);
    }
}

townPopulation(['Sofia <-> 1200000',

    'Montana <-> 20000',

    'New York <-> 10000000',

    'Washington <-> 2345000',

    'Las Vegas <-> 1000000'])