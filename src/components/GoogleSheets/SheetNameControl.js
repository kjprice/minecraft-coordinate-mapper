
import React from 'react';
import { connect } from 'react-redux'

import { setSelectedSpreadsheetSheetName } from '../../redux/actions/googleSheets';

const mapStateToProp = (state) => {
  const { googleSheets } = state;

  const { selectedSpreadsheetUrl, infoBySpreadsheetUrl } = googleSheets;

  const { selectedSheet, sheets } = infoBySpreadsheetUrl[selectedSpreadsheetUrl];
  return {
      selectedSheet, sheets
  }
}

function SheetNameControl(props) {
  const { selectedSheet, sheets, setSelectedSpreadsheetSheetName } = props;
  return <select value={selectedSheet} onChange={(e => setSelectedSpreadsheetSheetName(e.target.value))}>
    {/* TODO: Refresh coordinates  */}
    {sheets.map(sheetName => <option key={sheetName} value={sheetName}>{sheetName}</option>)}
  </select>
}

const actions = {
  setSelectedSpreadsheetSheetName
};


export default connect(mapStateToProp, actions)(SheetNameControl);