import React from 'react';

const Option = (props) => {
    const {name} = props;

    return <option value={name}>{name}</option>
}

const Options = (props) => {
    const {names} = props;
    
    return names.map(name => <Option key={name} name={name}/>)
}

const PointsControlDropdown = (props) => {
    const { onChange, names, selectedName } = props;

    return <select value={selectedName} onChange={onChange}>
        <Options names={names} />
    </select>
}

export default PointsControlDropdown;