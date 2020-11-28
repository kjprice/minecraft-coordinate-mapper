/* eslint-disable no-undef */
import {middleX, middleY, middleZ, BOX_HEIGHT} from '../settings/sketch';

export default class Point {
    name = null;
    coordinates = [];

    constructor(name, coordinates) {
        this.coordinates = coordinates;

        this.name = name;
    }

    // For p5.js
    draw() {
        push();
        const [x, y, z] = this.coordinates;
        const xDiff = x - middleX;
        const yDiff = y - middleY;
        const zDiff = z - middleZ;
        translate(xDiff, yDiff, zDiff);
        box(BOX_HEIGHT, BOX_HEIGHT, BOX_HEIGHT);
        pop();
    }
}