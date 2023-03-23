import React from 'react';
import { connect } from 'react-redux'

import { setSketchDimensionType } from '../../redux/actions/sketch';


const mapStateToProp = (state) => {
  const { sketch } = state;

  const { dimensionType } = sketch;
  return {
      dimensionType
  }
}

const PointsControls = (props) => {
    const {
      setSketchDimensionType,
        dimensionType
    } = props;

    return <div>
        <select onChange={(e) => setSketchDimensionType(e.target.value)} value={dimensionType}>
          <option value="2d">2d</option>
          <option value="3d">3d</option>
        </select>
    </div>
}

const actions = {
  setSketchDimensionType
};

export default connect(mapStateToProp, actions)(PointsControls);