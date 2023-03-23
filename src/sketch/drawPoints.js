import drawPoint from './drawPoint';
import scaleForRange from '../utils/scaleForRange';

import {
    CANVAS_WIDTH,
    CANVAS_HEIGHT,
    BOX_HEIGHT,
    CANVAS_BORDER_BUFFER,
} from '../settings/sketch';
import store from '../redux/store';

function getCoordinates() {
    const state = store.getState();
    const {
        coordinateStartId,
        coordinateEndId,
        coordinates,
        averageZ
    } = state.google.sheet;

    // const {dimensionType} = state.sketch;
    // console.log({dimensionType})

    if (!coordinates) {
        return null;
    }

    return coordinates.map(coordinateInfo => ({
        ...coordinateInfo,
        isStarting: coordinateInfo.id === coordinateStartId,
        isEnding: coordinateInfo.id === coordinateEndId,
        averageZ
    }));
}

function calculateMaxValues(coordinates) {
    let minX = coordinates[0].x;
    let minY = coordinates[0].y;
    let minZ = coordinates[0].z;
    let maxX = coordinates[0].x;
    let maxY = coordinates[0].y;
    let maxZ = coordinates[0].z;

    coordinates.slice(1).forEach(coordinate => {
        const { x, y, z } = coordinate;
        if (x < minX) {
            minX = x;
        }
        if (x > maxX) {
            maxX = x;
        }
        if (y < minY) {
            minY = y;
        }
        if (y > maxY) {
            maxY = y;
        }
        if (z < minZ) {
            minZ = z;
        }
        if (z > maxZ) {
            maxZ = z;
        }
    });

    return {
        minX, maxX, minY, maxY, minZ, maxZ,
    }
}

class PointPositions {
    constructor(coordinates, p) {
        this.p = p;
        const { minX, maxX, minY, maxY, minZ, maxZ } = calculateMaxValues(coordinates);
        this.coordinates = coordinates;
        this.minX = minX;
        this.maxX = maxX;
        this.minY = minY;
        this.maxY = maxY;
        this.minZ = minZ;
        this.maxZ = maxZ;
        this.mouseX = p.mouseX;
        this.mouseY = p.mouseY;
        // console.log(p.mouseX, p.mouseY);
    }

    getX(x) {
        const canvasLeft = CANVAS_BORDER_BUFFER;
        const canvasRight = CANVAS_WIDTH - (CANVAS_BORDER_BUFFER * 2);
        return scaleForRange(x, this.minX, this.maxX, canvasLeft, canvasRight);
    }

    getZ(z) {
        const canvasTop = CANVAS_BORDER_BUFFER;
        const canvasBottom = CANVAS_HEIGHT - (CANVAS_BORDER_BUFFER * 2);
        return scaleForRange(z, this.minZ, this.maxZ, canvasTop, canvasBottom);
    }

    isHovered(x, z) {
        if (this.mouseX < x) {
            return false;
        }
        if (this.mouseX > (x+ BOX_HEIGHT)) {
            return false;
        }
        if (this.mouseY < z) {
            return false;
        }
        if (this.mouseY > (z+ BOX_HEIGHT)) {
            return false;
        }

        return true;
    }

    get pointPositions() {
        return this.coordinates.map(coordinate => {
            const { x, y, z, isStarting, isEnding, averageZ } = coordinate;
            const canvasPositionX = this.getX(x);
            const canvasPositionZ = this.getZ(z);
            return {
                x: canvasPositionX,
                y,
                z: canvasPositionZ,
                coordinate,
                isHovered: this.isHovered(canvasPositionX, canvasPositionZ)
            };
        })
    }

    drawPointDescriptionInfo(coordinate) {
        const {x, y, z, name} = coordinate;
        this.p.fill('black');
        this.p.textSize(20);
        const pointDescription = `${name} \t ${x} \t ${y} \t ${z}`;
        this.p.text(pointDescription, 20, 20);
    }

    draw2dPoints() {
        this.pointPositions.forEach(({x, y, z, isHovered, coordinate}) => {
            if (isHovered) {
                this.drawPointDescriptionInfo(coordinate);
                this.p.fill('red');
            } else {
                this.p.fill('blue');
            }
            this.p.rect(x, z, BOX_HEIGHT, BOX_HEIGHT);
        });

    }
}

export default function drawPoints(p, dimension) {
    const coordinates = getCoordinates();
    if (!coordinates) {
        return;
    }

    window.coordinates = coordinates;

    // const maxValues = calculateMaxValues(coordinates);

    // console.log({coordinates});

    if (dimension === '2d') {
        const pointPositions = new PointPositions(coordinates, p);
        window.pointPositions = pointPositions;
        pointPositions.draw2dPoints();
        // coordinates.forEach((point) => drawPoint(point, p, dimension));
    } else {
        coordinates.forEach((point) => drawPoint(point, p, dimension));
    }
}
