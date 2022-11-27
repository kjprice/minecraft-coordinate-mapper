import React from 'react';

const Option = (props) => {
    const {coordinate} = props;

    return <option value={coordinate.id}>{coordinate.name || coordinate.type}</option>
}

const Options = (props) => {
    const {coordinates} = props;
    
    return coordinates.map(coordinate => <Option key={coordinate.id} coordinate={coordinate}/>)
}

const PointsControlDropdown = (props) => {
    const { onChange, selectedCoordinateId, coordinates } = props;

    return <select value={selectedCoordinateId} onChange={onChange}>
        <Options coordinates={coordinates} />
    </select>
}

export default PointsControlDropdown;