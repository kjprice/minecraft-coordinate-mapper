import {
    MINECRAFT_SET_COORDINATE_POINTS,
    MINECRAFT_SET_FROM_POINT,
    MINECRAFT_SET_TO_POINT
} from '../actions/coordinates';

import createPoints from '../utils/createPoints';

import positionsByName from '../../settings/positionsByName';

const initialPoints = createPoints(positionsByName)

const initialState = {
    positionsByName,
    points: initialPoints,
    fromPointName: initialPoints.slice(-1)[0].name,
    toPointName: initialPoints[0].name,
};

export default function coordinatesState(state = initialState, action) {
    switch(action.type) {
        case MINECRAFT_SET_COORDINATE_POINTS:
            return {
                ...state,
                coordinatePoints: action.coordinatePoints
            }
        case MINECRAFT_SET_FROM_POINT:
            return {
                ...state,
                fromPointName: action.pointName
            }
        case MINECRAFT_SET_TO_POINT:
            return {
                ...state,
                toPointName: action.pointName
            }
        default:
            return state;
    }
}