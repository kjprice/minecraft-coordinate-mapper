/* eslint-disable no-undef */
import * as Settings from '../settings/sketch';
import drawPoints from './drawPoints';
import resetCamera from './resetCamera';

// let fontBlack;
const sketch3d = (p) => {
    // p.preload = function() {
    //     fontBlack = loadFont('assets/Roboto-Black.ttf');
    // }

    p.setup = function() {
        p.createCanvas(Settings.CANVAS_WIDTH, Settings.CANVAS_HEIGHT, p.WEBGL);

        // p.textFont(p.fontBlack);
    }

    // function setup() {
    //     createCanvas(Settings.CANVAS_WIDTH, Settings.CANVAS_HEIGHT);

    //     textFont(fontBlack);
    // }

    p.drawAltitudes = function() {
        p.push();
        p.translate(50, 0, 50);

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
        p.rotateX(HALF_PI);
        // rotateX(frameCount * 0.01);
        // rotateY(frameCount * 0.01);
        p.plane(70);
        p.pop();
    }

    p.draw = function() {
        p.background(200);
        // normalMaterial();
        resetCamera(p);
        // drawAltitudes();
        drawPoints(p, '3d');

        // Allow user to interact (drag and zoom)
        p.orbitControl();
    }
};

// window.p5_3d = new p5(sketch3d, '3dp5');
export default sketch3d;