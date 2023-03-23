/* eslint-disable no-undef */
import {
    BOX_HEIGHT,
    middleX,
    middleY,
    CANVAS_HEIGHT
} from '../settings/sketch';

export default function drawPoint(point, p, dimension, maxValues) {
    const { x, y, z, isStarting, isEnding, averageZ } = point;
    p.push();

    // For p5.js sketches, the y value at the top of the sketch starts at 0
    const invertedY = CANVAS_HEIGHT - y;
    const zOffset = averageZ + CANVAS_HEIGHT

    const xDiff = x - middleX;
    const yDiff = invertedY - middleY;
    const zDiff = z - zOffset;

    if (isStarting) {
        p.fill('red');
    } else if (isEnding) {
        p.fill('blue');
    }
    if (dimension === '3d'){
        p.translate(xDiff, yDiff, zDiff);
        p.box(BOX_HEIGHT, BOX_HEIGHT, BOX_HEIGHT);
        p.pop();
    } else {
        p.rect(x, z, BOX_HEIGHT, BOX_HEIGHT);
    }
}