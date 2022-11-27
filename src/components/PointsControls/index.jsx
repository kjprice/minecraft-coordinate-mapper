import React from 'react';
import { connect } from 'react-redux'

import { setToPoint, setFromPoint } from '../../redux/actions/googleSheets';

import Dropdown from './Dropdown';

const PointsControls = (props) => {
    const {
        setToPoint,
        setFromPoint,
        coordinates, coordinateStartId, coordinateEndId
    } = props;

    return <div>
        <Dropdown onChange={(e) => setFromPoint(parseFloat(e.target.value))} selectedCoordinateId={coordinateStartId} coordinates={coordinates} />
        <Dropdown onChange={(e) => setToPoint(parseFloat(e.target.value))} selectedCoordinateId={coordinateEndId} coordinates={coordinates} />
    </div>
}

const mapStateToProp = (state) => {
    const { googleSheets } = state;

    const { coordinates, coordinateStartId, coordinateEndId } = googleSheets;
    return {
        coordinates, coordinateStartId, coordinateEndId
    }
}

const actions = {
    setToPoint, setFromPoint
};

export default connect(mapStateToProp, actions)(PointsControls);