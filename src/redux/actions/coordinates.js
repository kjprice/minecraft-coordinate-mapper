import store from '../store';

import getCoordinatesFromGoogleSheets from '../api/google.coordinates';

export const MINECRAFT_SET_COORDINATE_POINTS = 'MINECRAFT_SET_COORDINATE_POINTS';

export const setCoordinatePoints = (positionsByName) => ({
    type: MINECRAFT_SET_COORDINATE_POINTS,
    positionsByName
});

export const MINECRAFT_SET_FROM_POINT = 'MINECRAFT_SET_FROM_POINT';
// TODO: Should use a unique id not just pointName
export const setFromPoint = (pointName) => ({
    type: MINECRAFT_SET_FROM_POINT,
    pointName
});

export const MINECRAFT_SET_TO_POINT = 'MINECRAFT_SET_TO_POINT';
// TODO: Should use a unique id not just pointName
export const setToPoint = (pointName) => ({
    type: MINECRAFT_SET_TO_POINT,
    pointName
});

function formatGoogleCoordinates(results) {
    const positionsByName = {};

    results.forEach(r => {
        // TODO: Handle otherProps
        // eslint-disable-next-line no-unused-vars
        const {x, y, z, ...otherProps} = r;
        positionsByName[r.name] = [x, y, z];
    });

    return positionsByName;
}

export const pullCoordinates = () => {
    getCoordinatesFromGoogleSheets()
    .then((results) => {
        const positionsByName = formatGoogleCoordinates(results);

        store.dispatch(setCoordinatePoints(positionsByName))

    })
}