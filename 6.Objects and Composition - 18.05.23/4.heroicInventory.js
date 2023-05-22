function heroicInventory(input) {
    let result = [];

    input.forEach(str => {
        const obj = {};
        const heroDataInfo = str.split(' / ');
        obj.name = heroDataInfo[0];
        obj.level = Number(heroDataInfo[1]);

        const items = heroDataInfo[2];

        obj.items = items ? items.split(', ') : [];

        result.push(obj);
    });

    console.log(JSON.stringify(result));

}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])