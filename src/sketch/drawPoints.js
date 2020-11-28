import drawPoint from './drawPoint';

import store from '../redux/store';

export default function drawPoints() {
    const state = store.getState();
    if (!state.coordinates) {
        return;
    }
    if (!state.coordinates.points) {
        return;
    }
    state.coordinates.points.forEach(drawPoint);
}
