import React from 'react';
import { connect } from 'react-redux'

import { setGoogleSelectSpreasheetInit } from '../../redux/actions/google';
// showPicker
import { showPicker } from '../../components/Google/connectToGoogleDrive';


const mapStateToProp = (state) => {
  const { google } = state;

  const { accessToken } = google;
  return {
      accessToken
  }
}

function SelectSpreadsheet(props) {
  const { accessToken, setGoogleSelectSpreasheetInit } = props;
  function setSelectSpreadsheet() {
    setGoogleSelectSpreasheetInit();
    showPicker();
  }
  if (!accessToken) {
    return null;
  }
  return (<button type="button" onClick={setSelectSpreadsheet} style={{width: '700px'}}>Select Spreadsheet</button>);
}

// const actions = {
//   setEditSpreadsheetUrl
// };

const actions = {
  setGoogleSelectSpreasheetInit
};


export default connect(mapStateToProp, actions)(SelectSpreadsheet);