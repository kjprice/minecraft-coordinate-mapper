import { combineReducers } from 'redux';

import coordinates from './coordinates';
import googleSheets from './googleSheets';

export default combineReducers({
    coordinates,
    googleSheets,
});
