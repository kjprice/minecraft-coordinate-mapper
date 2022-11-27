import React, { useMemo } from 'react';
import { connect } from 'react-redux'
import calcDistances from '../utils/calcDistances';
import getStartingEndingPoints from '../utils/getStartingEndingPoints';

function _calcDistance(coordinates, coordinateStartId, coordinateEndId) {
    const _points = getStartingEndingPoints(coordinateStartId,
        coordinateEndId,
        coordinates);

    if (!_points) {
        return;
    }

    const {
        startPoint, endPoint
    } = _points;

    return calcDistances(startPoint, endPoint);
}

const Stats = (props) => {
    const { coordinates, coordinateStartId, coordinateEndId } = props;

    const distances = useMemo(() => _calcDistance(coordinates, coordinateStartId, coordinateEndId), [coordinates, coordinateStartId, coordinateEndId]);

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
    const { googleSheets } = state;

    const { coordinates, coordinateStartId, coordinateEndId } = googleSheets;
    return {
        coordinates, coordinateStartId, coordinateEndId
    }
}

export default connect(mapStateToProp)(Stats);