import drawPoint from './drawPoint';
import { getCoordinates, getPointPositions } from './utils/stateMemoized';



export default function drawPoints(p, dimension) {
    const coordinates = getCoordinates();
    if (!coordinates) {
        return;
    }

    window.coordinates = coordinates;

    if (dimension === '2d') {
        const pointPositions = getPointPositions(coordinates, p);
        window.pointPositions = pointPositions;
        pointPositions.draw2dPoints();
    } else {
        coordinates.forEach((point) => drawPoint(point, p, dimension));
    }
}
