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

    get pointPositions() {
        return this.coordinates.map(coordinate => {
            const { x, y, z, isStarting, isEnding, averageZ } = coordinate;
            return {
                x: this.getX(x),
                y,
                z: this.getZ(z),
                isStarting, isEnding, averageZ
            };
        })
    }

    draw2dPoints() {
        this.pointPositions.forEach(({x, y, z}) => {
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
