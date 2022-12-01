import React from 'react';
import { connect } from 'react-redux'

import { setAuthenticated, setSheetNames, setSpreadsheetName, setSheetValues, setSelectedSpreadsheetSheetName } from '../../redux/actions/googleSheets';
import { authenticate, getSpreadsheetMetadata, getSpreadsheetValues } from '../../redux/api/google.auth.spreadsheets';

const mapStateToProp = (state) => {
  const { googleSheets } = state;

  const {
    editSpreadsheetUrl,
    selectedSpreadsheetUrl,
    isAuthenticated,
  } = googleSheets;
  return {
      editSpreadsheetUrl,
      selectedSpreadsheetUrl,
      isAuthenticated,
  }
}

function pullDataText(editSpreadsheetUrl, selectedSpreadsheetUrl) {
  if (editSpreadsheetUrl === selectedSpreadsheetUrl) {
    return 'Refresh';
  }

  return 'Connect and Pull Data';
}

function authenticateIfNecessary(isAuthenticated, setAuthenticated) {
  if (isAuthenticated) {
    return Promise.resolve();
  }

  return authenticate().then(setAuthenticated)
}

function loadSheetNames(selectedSpreadsheetUrl, setSheetNames, setSpreadsheetName) {
  return getSpreadsheetMetadata(selectedSpreadsheetUrl).then(metadata => {
    const { sheetNames, spreadsheetName } = metadata;
    setSheetNames(sheetNames);
    setSpreadsheetName(spreadsheetName);
    return sheetNames;
  });
}

function loadSpreadsheetValues(selectedSpreadsheetUrl, selectedSheet, setSheetValues) {
  const spreadsheetValues = getSpreadsheetValues(selectedSpreadsheetUrl, selectedSheet);
  setSheetValues(spreadsheetValues);

  return spreadsheetValues;
}

function setSelectedSheetNameIfNecessary(selectedSheet, sheetNames, setSelectedSpreadsheetSheetName) {
  if (selectedSheet && sheetNames.includes(selectedSheet)) {
    return selectedSheet;
  }

  const newSelectedSheet = sheetNames[0];
  setSelectedSpreadsheetSheetName(newSelectedSheet);
  return newSelectedSheet;
}

function loadAllSheetData(props) {
  const { setAuthenticated, setSheetNames, setSpreadsheetName, setSheetValues, setSelectedSpreadsheetSheetName } = props;
  const { selectedSpreadsheetUrl, selectedSheet, isAuthenticated } = props;

  return authenticateIfNecessary(isAuthenticated, setAuthenticated)
  .then(() => loadSheetNames(selectedSpreadsheetUrl, setSheetNames, setSpreadsheetName))
  .then((sheetNames) => setSelectedSheetNameIfNecessary(selectedSheet, sheetNames, setSelectedSpreadsheetSheetName))
  .then((newSelectedSheet) => loadSpreadsheetValues(selectedSpreadsheetUrl, newSelectedSheet, setSheetValues))
}

function PullSpreadsheetControl(props) {
  const { editSpreadsheetUrl, selectedSpreadsheetUrl } = props;

  return <button onClick={() => loadAllSheetData(props)} type="button">{pullDataText(editSpreadsheetUrl, selectedSpreadsheetUrl)}</button>
}

const actions = {
  setAuthenticated, setSheetNames, setSpreadsheetName, setSheetValues, setSelectedSpreadsheetSheetName
};


export default connect(mapStateToProp, actions)(PullSpreadsheetControl);