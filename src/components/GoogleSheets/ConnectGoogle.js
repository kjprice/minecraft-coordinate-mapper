import React from 'react';
import { connect } from 'react-redux'

import { startGoogleInterval } from '../../components/Google/connectToGoogleDrive';


const mapStateToProp = (state) => {
  const { google } = state;

  const { accessToken } = google;
  return {
      accessToken
  }
}

function ConnectGoogle(props) {
  const { accessToken } = props;
  function connectToGoogle() {
    startGoogleInterval();
  }
  if (accessToken) {
    return null;
  }

  return (<button type="button" onClick={connectToGoogle} className="btn">Connect To Google</button>);

}

export default connect(mapStateToProp)(ConnectGoogle);
