function timeToWalk(steps, meters, speed) {
    let distance = steps * meters / 1000;
    let tempMargin = (distance / speed * 60) + Math.floor(distance / 0.5);
    let hours = Math.floor(tempMargin / 60).toFixed(0).padStart(2, '0');
    let mins = Math.floor(tempMargin - hours * 60).toFixed(0).padStart(2, '0');
    let secs = Math.round(((tempMargin - hours * 60) - mins) * 60).toFixed(0).padStart(2, '0');


    console.log(`${hours}:${mins}:${secs}`);
}

timeToWalk(2564, 0.70, 5.5)