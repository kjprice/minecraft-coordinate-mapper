/* eslint-disable no-undef */
import * as Settings from '../settings/sketch';
import calcDistances from './calcDistances';
import drawPoints from './drawPoints';


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

function draw() {
    background(200);
    drawPoints();

    // Allow user to interact (drag and zoom)
    orbitControl();
}

window.draw = draw;
window.setup = setup;
window.preload = preload;