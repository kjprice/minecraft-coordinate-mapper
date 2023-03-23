import { combineReducers } from 'redux';

// import coordinates from './coordinates';
import google from './google';
import googleSheets from './googleSheets';
import sketch from './sketch';

export default combineReducers({
    // coordinates,
    google,
    googleSheets,
    sketch,
});
