const CANVAS_WIDTH = 700;
const CANVAS_HEIGHT = 700;

const BOX_HEIGHT = 10;

const middleX = CANVAS_WIDTH / 2;
const middleY = CANVAS_HEIGHT / 2;
const middleZ = (middleX + middleY) / 2;  // Avg


let points = null;

const POSITIONS = {
    'Mountain Home': [-30, 79, 91],
    'LAVA': [-50, 22, 38],
    'LAVA Entrance': [-87, 61, 28],
    'Basement ': [-29, 58, 117],
    'Lava death': [-60, 23, 6],
    'Massive cave exit': [-54, 29, 30],
    'Massive cave chest': [-65, 11, 4],
    'Cave deep': [29, 23, 15],
}

function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT, WEBGL);

    points = Object.values(POSITIONS).map(coordinates => new Point(coordinates));
}

class Point {
    coordinates = [];

    constructor(coordinates) {
        this.coordinates = coordinates;
    }

    draw() {
        push();
        const [x, y, z] = this.coordinates;
        const xDiff = x - middleX;
        const yDiff = y - middleY;
        const zDiff = z - middleZ;
        translate(xDiff, yDiff, zDiff)
        box(BOX_HEIGHT, BOX_HEIGHT, BOX_HEIGHT)
        pop();
    }
}

function drawPoints() {
    points.forEach(point => point.draw())
}

function draw() {
    background(200);
    drawPoints();
    orbitControl();

}