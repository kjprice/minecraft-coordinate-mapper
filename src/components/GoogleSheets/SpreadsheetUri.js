import React from 'react';
import { connect } from 'react-redux'

import { setEditSpreadsheetUrl } from '../../redux/actions/googleSheets';

const mapStateToProp = (state) => {
  const { googleSheets } = state;

  const { editSpreadsheetUrl } = googleSheets;
  return {
      editSpreadsheetUrl
  }
}

function SpreadsheetUri(props) {
  const { editSpreadsheetUrl, setEditSpreadsheetUrl } = props;
  return (<input onChange={e => setEditSpreadsheetUrl(e.target.value)} style={{width: '700px'}} type="text" value={editSpreadsheetUrl} />);
}

const actions = {
  setEditSpreadsheetUrl
};


export default connect(mapStateToProp, actions)(SpreadsheetUri);