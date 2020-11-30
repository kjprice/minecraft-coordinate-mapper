import React, { useMemo } from 'react';
import { connect } from 'react-redux'
import calcDistances from '../utils/calcDistances';
import getStartingEndingPoints from '../utils/getStartingEndingPoints';

function _calcDistance(points, fromPointName, toPointName) {
    const _points = getStartingEndingPoints(fromPointName,
        toPointName,
        points);

    if (!_points) {
        return;
    }

    const {
        startPoint, endPoint
    } = _points;

    return calcDistances(startPoint.coordinates, endPoint.coordinates);
}

const Stats = (props) => {
    const { points, fromPointName, toPointName } = props;

    // TODO: Need unique ids instead of just "name"
    const distances = useMemo(() => _calcDistance(points, fromPointName, toPointName), [points, fromPointName, toPointName]);

    const {
        // diffs,
        steps,
        totalDistance
    } = distances;

    return <div>
        <ul>
            <li>Distance: {totalDistance}</li>
            <li>Steps: {steps.join(', ')}</li>
        </ul>
    </div>
}

const mapStateToProp = (state) => {
    const { coordinates } = state;

    const { points, fromPointName, toPointName } = coordinates;
    return {
        points, fromPointName, toPointName
    }
}

export default connect(mapStateToProp)(Stats);