import React from 'react';
import { connect } from 'react-redux'

import { setSpreadsheetUrl } from '../../redux/actions/googleSheets';

const mapStateToProp = (state) => {
  const { googleSheets } = state;

  const { spreadsheetUrl } = googleSheets;
  return {
      spreadsheetUrl
  }
}

function SpreadsheetUri(props) {
  const { spreadsheetUrl, setSpreadsheetUrl } = props;
  return (<label> Google Sheet URL: <input onChange={e => setSpreadsheetUrl(e.target.value)} style={{width: '700px'}} type="text" value={spreadsheetUrl} />
  </label>);
}

const actions = {
  setSpreadsheetUrl
};


export default connect(mapStateToProp, actions)(SpreadsheetUri);