/* eslint-disable no-undef */
import {
    BOX_HEIGHT,
    middleX,
    middleY,
    middleZ,
    CANVAS_HEIGHT
} from '../settings/sketch';

export default function drawPoint(point) {
    const { coordinates, isStarting, isEnding } = point;
    push();
    const [x, y, z] = coordinates;

    // For p5.js sketches, the y value at the top of the sketch starts at 0
    const invertedY = CANVAS_HEIGHT - y;

    const xDiff = x - middleX;
    const yDiff = invertedY - middleY;
    const zDiff = z - middleZ;

    if (isStarting) {
        fill('red');
    } else if (isEnding) {
        fill('blue');
    }
    translate(xDiff, yDiff, zDiff);
    box(BOX_HEIGHT, BOX_HEIGHT, BOX_HEIGHT);
    pop();
}