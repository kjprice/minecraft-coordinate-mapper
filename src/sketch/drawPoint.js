/* eslint-disable no-undef */
import {
    BOX_HEIGHT,
    middleX,
    middleY,
    middleZ
} from '../settings/sketch';

export default function drawPoint(point) {
    const { coordinates, isStarting, isEnding } = point;
    push();
    const [x, y, z] = coordinates;
    const xDiff = x - middleX;
    const yDiff = y - middleY;
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