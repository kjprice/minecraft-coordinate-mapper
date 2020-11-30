/* eslint-disable no-undef */
import * as Settings from '../settings/sketch';
import drawPoints from './drawPoints';

let fontBlack;
function preload() {
    fontBlack = loadFont('assets/Roboto-Black.ttf');
}

function setup() {
    createCanvas(Settings.CANVAS_WIDTH, Settings.CANVAS_HEIGHT, WEBGL);

    textFont(fontBlack);
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