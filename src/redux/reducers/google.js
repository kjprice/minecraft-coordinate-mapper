import {
    GOOGLE_SET_ACCESS_TOKEN,
    GOOGLE_PICKER_MESSAGE,
    GOOGLE_SELECT_SPREADSHEET_INIT,
} from '../actions/google';


const initialState = {
    accessToken: null,
    googlePickerMessage: '',
    spreadsheetSelectedStatus: null,
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
        case GOOGLE_SELECT_SPREADSHEET_INIT:
            return {
                ...state,
                spreadsheetSelectedStatus: 'inprogress'
            }
        default:
        return state;
    }
}