import React from 'react';
import { connect } from 'react-redux'

import { loadAndSetSpreadsheetData } from '../../components/Google/connectToGoogleDrive';


const mapStateToProp = (state) => {
  const { google } = state;

  const { sheet } = google;
  const { selectedSheetName, id} = sheet;
  return {
      selectedSheetName, id
  }
}


function RefreshSpreadsheet(props) {
  const { selectedSheetName, id } = props;
  function refreshSpreadsheet() {
    loadAndSetSpreadsheetData(id, selectedSheetName);
  }
  if (!selectedSheetName) {
    return null;
  }
  return (<button className='btn btn-primary' type="button" onClick={refreshSpreadsheet} >Refresh</button>);
}


export default connect(mapStateToProp)(RefreshSpreadsheet);