import React from 'react';
import { connect } from 'react-redux'


const mapStateToProp = (state) => {
  const { google } = state;
  console.log({google});

  const { accessToken, sheet } = google;
  return {
      accessToken, sheet
  }
}

// import PullSpreadsheetControl from "./PullSpreadsheetControl";

// TODO: List all spreadsheets in drop down
// TODO: Add a button to set (or refresh if url has already been used)
// TODO: On set, authenticate user (if not already authenticated), get all sheets from spreadsheet, allow user to select a sheet


const GoogleSheets = (props) => {
  console.log({props})
  const {sheet} = props;
  if (!sheet.url) {
    return null;
  }
  const { url, name, id } = sheet;
  return <div>
    <div><label>Google Sheet URL: {url} </label></div>
    <div><label>Google Sheet Name: {name} </label></div>
    {/* <div><label>Existing Google Sheet URLs: <SpreadsheetUris /> </label></div> */}
    {/* <div><PullSpreadsheetControl /></div> */}
    
  </div>
}

export default connect(mapStateToProp)(GoogleSheets);
