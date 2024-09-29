let car1InitPos = -15;
let car2InitPos = -26;
let car1Pos = car1InitPos;
let car2Pos = car2InitPos;
let roadLength = 20

function createRoad(position, character) {
    if (position < 0) {
        return '='.repeat(roadLength);
    }
    let road = '='.repeat(roadLength - position - 1) + character + '='.repeat(position);
    return road;
}

function advanceCar1() {
    car1Pos = car1Pos + 1;
    if (car1Pos >= roadLength) {
        car1Pos = car1InitPos;
    }
    document.getElementById('road').textContent = createRoad(car1Pos, "🚗");
}


function advanceCar2() {
    car2Pos = (car2Pos + 1);
    if (car2Pos >= roadLength) {
        car2Pos = car2InitPos;
    }
    document.getElementById('second-road').textContent = createRoad(car2Pos, "🐢");
}

setInterval(advanceCar1, 1431);
setInterval(advanceCar2, 1000);