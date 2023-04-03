import React from 'react';
import { connect } from 'react-redux'

import { setGoogleSelectSpreasheetInit } from '../../redux/actions/google';
import { showPicker } from '../../components/Google/connectToGoogleDrive';


const mapStateToProp = (state) => {
  const { google } = state;

  const { accessToken } = google;
  return {
      accessToken
  }
}

const buttonText = accessToken => {
  if (accessToken) {
    return 'Select Spreadsheet';
  }

  return 'Connect To Google And Select Spreadsheet';
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
  return (<button className='btn btn-primary' type="button" onClick={setSelectSpreadsheet}>{buttonText(accessToken)}</button>);
}

const actions = {
  setGoogleSelectSpreasheetInit
};


export default connect(mapStateToProp, actions)(SelectSpreadsheet);