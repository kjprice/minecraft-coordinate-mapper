/* eslint-disable no-undef */
import * as Settings from '../settings/sketch';
import drawPoints from './drawPoints';
import resetCamera from './resetCamera';

let fontBlack;
function preload() {
    fontBlack = loadFont('assets/Roboto-Black.ttf');
}

function setup() {
    createCanvas(Settings.CANVAS_WIDTH, Settings.CANVAS_HEIGHT, WEBGL);

    textFont(fontBlack);
}

function drawAltitudes() {
    push();
    translate(50, 0, 50);

    // plane(100);
    // background('white');
    // fill(0, 0, 0, 50);
    // fill(0, 150);
    // tint(0, 0, 0, 50)
    // noStroke();

    // normalMaterial();
    // push();
    // rotateZ(frameCount * 0.01);
    // console.log(frameCount * 0.01)
    rotateX(HALF_PI);
    // rotateX(frameCount * 0.01);
    // rotateY(frameCount * 0.01);
    plane(70);
    pop();
}

function draw() {
    background(200);
    // normalMaterial();
    resetCamera();
    drawAltitudes();
    drawPoints();

    // Allow user to interact (drag and zoom)
    orbitControl();
}

window.draw = draw;
window.setup = setup;
window.preload = preload;