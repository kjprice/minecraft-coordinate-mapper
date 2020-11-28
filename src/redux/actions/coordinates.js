export const MINECRAFT_SET_COORDINATE_POINTS = 'MINECRAFT_SET_COORDINATE_POINTS';

export const setCoordinatePoints = (coordinatePoints) => ({
    type: MINECRAFT_SET_COORDINATE_POINTS,
    coordinatePoints
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