import React from 'react';
import { connect } from 'react-redux'

import { setSelectedSpreadsheetUrl } from '../../redux/actions/googleSheets';

const mapStateToProp = (state) => {
  const { googleSheets } = state;

  const { selectedSpreadsheetUrl, infoBySpreadsheetUrl } = googleSheets;
  const spreadsheetUrls = Object.keys(infoBySpreadsheetUrl);
  return {
    selectedSpreadsheetUrl,
      spreadsheetUrls,
  }
}

// TODO: I think this default option is unnecessary
function DefaultOption(props) {
  const { selectedSpreadsheetUrl, spreadsheetUrls } = props;
  if (spreadsheetUrls.includes(selectedSpreadsheetUrl)) {
    return null;
  }

  return <option value={selectedSpreadsheetUrl}></option>
}

function SpreadsheetUris(props) {
  const { selectedSpreadsheetUrl, spreadsheetUrls, setSelectedSpreadsheetUrl } = props;
  return <select value={selectedSpreadsheetUrl} onChange={(e => setSelectedSpreadsheetUrl(e.target.value))}>
    <DefaultOption selectedSpreadsheetUrl={selectedSpreadsheetUrl} spreadsheetUrls={spreadsheetUrls} />
    {spreadsheetUrls.map(spreadsheetUrl => <option key={spreadsheetUrl} value={spreadsheetUrl}>{spreadsheetUrl}</option>)}
  </select>
}

const actions = {
  setSelectedSpreadsheetUrl
};

export default connect(mapStateToProp, actions)(SpreadsheetUris);