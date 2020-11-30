import React, { useMemo } from 'react';
import { connect } from 'react-redux'

import { setToPoint, setFromPoint } from '../../redux/actions/coordinates';

import Dropdown from './Dropdown';

const PointsControls = (props) => {
    const {
        points,
        setToPoint,
        setFromPoint,
        fromPointName, toPointName
    } = props;

    // TODO: Need unique ids instead of just "name"
    const names = useMemo(() => points.map(p => p.name), [points]);

    return <div>
        <Dropdown onChange={(e) => setFromPoint(e.target.value)} selectedName={fromPointName} names={names} />
        <Dropdown onChange={(e) => setToPoint(e.target.value)} selectedName={toPointName} names={names} />
    </div>
}

const mapStateToProp = (state) => {
    const { coordinates } = state;

    const { points, fromPointName, toPointName } = coordinates;
    return {
        points, fromPointName, toPointName
    }
}

const actions = {
    setToPoint, setFromPoint
};

export default connect(mapStateToProp, actions)(PointsControls);