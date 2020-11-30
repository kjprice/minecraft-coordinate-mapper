import {
    MINECRAFT_SET_COORDINATE_POINTS,
    MINECRAFT_SET_FROM_POINT,
    MINECRAFT_SET_TO_POINT
} from '../actions/coordinates';

import createPoints from '../utils/createPoints';

import initialPositionsByName from '../../settings/positionsByName';

const createFromPointName = (points, state = {}, forceReset) => {
    const { fromPointName } = state;
    if (forceReset || !fromPointName) {
        return points.slice(-1)[0].name;
    }

    return fromPointName;
}

const createToPointName = (points, state = {}, forceReset) => {
    const { toPointName } = state;
    if (forceReset || !toPointName) {
        return points[0].name;
    }

    return toPointName;
}

const createPointsInfo = (positionsByName, state, forceReset = true) => {
    const points = createPoints(positionsByName);

    return {
        points,
        fromPointName: createFromPointName(points, state, forceReset),
        toPointName: createToPointName(points, state, forceReset)
    }
}

const initialState = {
    positionsByName: initialPositionsByName,
    ...createPointsInfo(initialPositionsByName, {}),
};

export default function coordinatesState(state = initialState, action) {
    switch(action.type) {
        case MINECRAFT_SET_COORDINATE_POINTS:
            return {
                ...state,
                positionsByName: action.positionsByName,
                ...createPointsInfo(action.positionsByName, state)
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