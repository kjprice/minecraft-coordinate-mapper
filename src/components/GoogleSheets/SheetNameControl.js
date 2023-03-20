
import React from 'react';
import { connect } from 'react-redux'

import { setSelectedSpreadsheetSheetName, setAuthenticated, setSheetValues } from '../../redux/actions/googleSheets';
import { authenticate, getSpreadsheetValues } from '../../redux/api/google.auth.spreadsheets';

const mapStateToProp = (state) => {
  const { googleSheets } = state;

  const { selectedSpreadsheetUrl, infoBySpreadsheetUrl, isAuthenticated } = googleSheets;

  const { selectedSheet, sheets, valuesBySheetName } = infoBySpreadsheetUrl[selectedSpreadsheetUrl];
  return {
      selectedSheet, sheets, valuesBySheetName, isAuthenticated, selectedSpreadsheetUrl
  }
}

function authenticateIfNecessary(isAuthenticated, setAuthenticated) {
  if (isAuthenticated) {
    return Promise.resolve();
  }

  return authenticate().then(setAuthenticated)
}

async function loadSpreadsheetValues(selectedSpreadsheetUrl, selectedSheet, setSheetValues) {
  console.log({selectedSpreadsheetUrl, selectedSheet, setSheetValues})
  const spreadsheetValues = await getSpreadsheetValues(selectedSpreadsheetUrl, selectedSheet);
  console.log('sheetcontrol.js')
  console.log({spreadsheetValues})
  setSheetValues(spreadsheetValues);

  return spreadsheetValues;
}

function onSheetNameChanage(setSelectedSpreadsheetSheetName, selectedSheet, valuesBySheetName, isAuthenticated, setAuthenticated, selectedSpreadsheetUrl, setSheetValues) {
  setSelectedSpreadsheetSheetName(selectedSheet);
  if (!valuesBySheetName[selectedSheet]) {
    authenticateIfNecessary(isAuthenticated, setAuthenticated)
    .then(() => loadSpreadsheetValues(selectedSpreadsheetUrl, selectedSheet, setSheetValues));
  }
}

function SheetNameControl(props) {
  const { selectedSheet, sheets, setSelectedSpreadsheetSheetName, valuesBySheetName, selectedSpreadsheetUrl, isAuthenticated } = props;
  return <select value={selectedSheet} onChange={(e => onSheetNameChanage(setSelectedSpreadsheetSheetName, e.target.value, valuesBySheetName, isAuthenticated, setAuthenticated, selectedSpreadsheetUrl, setSheetValues))}>
    {/* TODO: Refresh coordinates  */}
    {sheets.map(sheetName => <option key={sheetName} value={sheetName}>{sheetName}</option>)}
  </select>
}

const actions = {
  setSelectedSpreadsheetSheetName,
  setAuthenticated, setSheetValues, setSelectedSpreadsheetSheetName
};


export default connect(mapStateToProp, actions)(SheetNameControl);