import React from 'react';
import { connect } from 'react-redux'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { selectSheetByName } from '../Google/connectToGoogleDrive';


const mapStateToProp = (state) => {
  const { google } = state;
  console.log({google});

  if (!google.sheet) {
    return {};
  }

  const { sheetNames, selectedSheetName, id } = google.sheet;
  return {
    sheetNames, selectedSheetName, id
  }
}


const SheetDropdown = (props) => {
  const { sheetNames, selectedSheetName, id } = props;
  const onChange = (sheetName) => {
    selectSheetByName(id, sheetName);
  }
  if (!sheetNames) {
    return null;
  }
  return (
    <DropdownButton id="dropdown-basic-button" title={selectedSheetName}>
      {sheetNames.map(name => <Dropdown.Item key={name} onClick={() => onChange(name)}>{name}</Dropdown.Item>)}
      
    </DropdownButton>
  )
}


export default connect(mapStateToProp)(SheetDropdown);
