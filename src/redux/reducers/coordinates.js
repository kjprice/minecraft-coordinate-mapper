import {
    MINECRAFT_SET_COORDINATE_POINTS
} from '../actions/coordinates';

import createPoints from '../utils/createPoints';

import positionsByName from '../../settings/positionsByName';

const initialState = {
    positionsByName,
    points: createPoints(positionsByName)
};

export default function coordinatesState(state = initialState, action) {
    switch(action.type) {
        case MINECRAFT_SET_COORDINATE_POINTS:
            return {
                ...state,
                coordinatePoints: action.coordinatePoints
            }
        default:
            return state;
    }
}