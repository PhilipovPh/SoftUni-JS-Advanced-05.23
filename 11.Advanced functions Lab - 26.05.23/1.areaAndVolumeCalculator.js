function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function solve(area, vol, input) {
    //ToDo....
}
function solve(area, vol, input) {
    let coordinates = JSON.parse(input);
    let result = [];

    for (const points of coordinates) {
        result.push({
            area: area.call(points),
            volume: vol.call(points),
        });
    }

    return result;
}