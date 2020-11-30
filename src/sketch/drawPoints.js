import drawPoint from './drawPoint';

import store from '../redux/store';

function getPoints() {
    const state = store.getState();
    const {
        fromPointName,
        toPointName,
        points,
        averageZ
    } = state.coordinates;

    if (!points) {
        return null;;
    }

    return points.map(p => ({
        ...p,
        isStarting: p.name === fromPointName,
        isEnding: p.name === toPointName,
        averageZ
    }));
}

export default function drawPoints() {
    const points = getPoints();
    if (!points) {
        return;
    }

    points.forEach(drawPoint);
}
