/* eslint-disable no-undef */
import * as Settings from '../settings/sketch';

import store from '../redux/store';

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

// calcDistances(POSITIONS['Cave deep'], POSITIONS['LAVA Entrance']);
// calcDistances(POSITIONS['Cave deep'], POSITIONS['Massive cave chest']);

let fontBlack;
function preload() {
    fontBlack = loadFont('assets/Roboto-Black.ttf');
}

function setup() {
    createCanvas(Settings.CANVAS_WIDTH, Settings.CANVAS_HEIGHT, WEBGL);

    textFont(fontBlack);
}

function drawPoints() {
    const state = store.getState();
    if (!state.coordinates) {
        return;
    }
    if (!state.coordinates.points) {
        return;
    }
    state.coordinates.points.forEach(point => point.draw());
}


function draw() {
    background(200);
    drawPoints();

    // Allow user to interact (drag and zoom)
    orbitControl();
}

window.draw = draw;
window.setup = setup;
window.preload = preload;