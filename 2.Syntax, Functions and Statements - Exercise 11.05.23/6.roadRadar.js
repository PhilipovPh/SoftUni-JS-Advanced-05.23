function roadRadar(speed, area) {
    switch (area) {
        case 'motorway': {
            let speedLimit = 130;
            if (speed <= speedLimit) {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            } else {
                let difference = speed - speedLimit;
                if (difference > 40) {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - reckless drivin`);
                } else if (difference > 20) {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`);
                } else {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - speeding`);
                }
            }
            break;
        }
        case 'interstate': {
            let speedLimit = 90;
            if (speed <= speedLimit) {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            } else {
                let difference = speed - speedLimit;
                if (difference > 40) {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - reckless drivin`);
                } else if (difference > 20) {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`);
                } else {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - speeding`);
                }
            }
            break;
        }
        case 'city': {
            let speedLimit = 50;
            if (speed <= speedLimit) {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            } else {
                let difference = speed - speedLimit;
                if (difference > 40) {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - reckless drivin`);
                } else if (difference > 20) {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`);
                } else {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - speeding`);
                }
            }
            break;
        }
        case 'residential': {
            let speedLimit = 20;
            if (speed <= speedLimit) {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            } else {
                let difference = speed - speedLimit;
                if (difference > 40) {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - reckless drivin`);
                } else if (difference > 20) {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`);
                } else {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - speeding`);
                }
            }
            break;
        }

            break;
    }
}

roadRadar(40, 'city');
console.log(`--------`);
roadRadar(120, 'interstate');