import {
    GOOGLE_SET_ACCESS_TOKEN,
    GOOGLE_PICKER_MESSAGE,
} from '../actions/google';


const initialState = {
    accessToken: null,
    googlePickerMessage: ''
};

export default function googleState(state = initialState, action) {
    switch(action.type) {
        case GOOGLE_SET_ACCESS_TOKEN:
            return {
                ...state,
                accessToken: action.accessToken,
            }
        case GOOGLE_PICKER_MESSAGE:
            return {
                ...state,
                googlePickerMessage: action.pickerMessage,
            }
        default:
        return state;
    }
}