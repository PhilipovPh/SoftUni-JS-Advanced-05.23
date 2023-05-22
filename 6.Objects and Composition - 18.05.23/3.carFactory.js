function carFactory(input) {

    if (input.power < 120) {
        delete input.power;
        input.engine = { power: 90, volume: 1800 };
    } else if (input.power < 200) {
        delete input.power;
        input.engine = { power: 120, volume: 2400 };
    } else {
        delete input.power;
        input.engine = { power: 200, volume: 3500 };
    }

    if (input.carriage === 'hatchback') {
        input.carriage = { type: 'hatchback', color: input.color };
        delete input.color;
    } else if (input.carriage === 'coupe') {
        input.carriage = { type: 'coupe', color: input.color };
        delete input.color;
    }

    if (input.wheelsize % 2 === 0) {
        const size = input.wheelsize - 1;
        input.wheels = [size, size, size, size];
        delete input.wheelsize
    } else {
        const size = input.wheelsize;
        input.wheels = [size, size, size, size];
        delete input.wheelsize;
    }

    return input;
}

carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
)