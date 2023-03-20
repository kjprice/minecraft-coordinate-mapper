import {
    GOOGLE_SET_ACCESS_TOKEN,
} from '../actions/google';


const initialState = {
    accessToken: null,
};

export default function googleState(state = initialState, action) {
    switch(action.type) {
        case GOOGLE_SET_ACCESS_TOKEN:
            return {
                ...state,
                accessToken: action.accessToken,
            }
       default:
            return state;
    }
}