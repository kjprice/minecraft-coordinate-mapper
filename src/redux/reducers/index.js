import { combineReducers } from 'redux';

import coordinates from './coordinates';
import google from './google';

export default combineReducers({
    coordinates,
    google
});
