/* eslint-disable no-undef */
import Point from './Point';
import * as Settings from '../modules/Settings';
import POSITIONS from '../modules/Positions'; 

let points = null;

// TODO: Need a way to visualize points - maybe color certain items red (mountain home and lava entrence?)

function calcDistances(positions1, positions2) {
    const diffs = [];
    positions1.forEach((p1, i) => {
        const p2 = positions2[i];
        diffs.push(p1 - p2);
    });

    const diffsSquared = diffs.map(d => d * d);
    const sumSquaredDiffs = diffsSquared.reduce((v, d) => v + d, 0);;
    const totalDistance = Math.sqrt(sumSquaredDiffs);
    const steps = diffs.map(diff => diff / totalDistance)
    console.log({totalDistance, diffs, steps});

    return diffs;
}

calcDistances(POSITIONS['Cave deep'], POSITIONS['LAVA Entrance']);
calcDistances(POSITIONS['Cave deep'], POSITIONS['Massive cave chest']);

function createPoints() {
    const names = Object.keys(POSITIONS);
    points = names.map(name => {
        const coordinates = POSITIONS[name];

        return new Point(name, coordinates);
    });
}

let fontBlack;
function preload() {
    fontBlack = loadFont('assets/Roboto-Black.ttf');
}

function setup() {
    createCanvas(Settings.CANVAS_WIDTH, Settings.CANVAS_HEIGHT, WEBGL);

    textFont(fontBlack);

    createPoints();
}


// function drawPointNames() {
//     points.forEach((point, i) => {
//         const x = Settings.CANVAS_WIDTH * 3 / 4;
//         const y = i * 20;
//         const xWidth = Settings.CANVAS_WIDTH * 1 / 4;

//         const { name } = point;
//         text(name, x, y, xWidth)
//     });
// }

function drawPoints() {
    // Draw actual locations
    points.forEach(point => point.draw());
}


function draw() {
    background(200);
    drawPoints();

    // drawPointNames();

    // Allow user to interact (drag and zoom)
    orbitControl();
}

window.draw = draw;
window.setup = setup;
window.preload = preload;