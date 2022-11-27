import drawPoint from './drawPoint';

import store from '../redux/store';

function getCoordinates() {
    const state = store.getState();
    const {
        coordinateStartId,
        coordinateEndId,
        coordinates,
        averageZ
    } = state.googleSheets;

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

export default function drawPoints() {
    const coordinates = getCoordinates();
    if (!coordinates) {
        return;
    }

    coordinates.forEach(drawPoint);
}
