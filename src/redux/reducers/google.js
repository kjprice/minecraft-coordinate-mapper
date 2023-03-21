import {
    GOOGLE_SET_ACCESS_TOKEN,
    GOOGLE_SELECTED_SHEET_URL,
    GOOGLE_SELECT_SPREADSHEET_INIT,
} from '../actions/google';


const initialState = {
    accessToken: null,
    sheetUrl: '',
    spreadsheetSelectedStatus: null,
};

export default function googleState(state = initialState, action) {
    switch(action.type) {
        case GOOGLE_SET_ACCESS_TOKEN:
            return {
                ...state,
                accessToken: action.accessToken,
            }
        case GOOGLE_SELECTED_SHEET_URL:
            return {
                ...state,
                sheetUrl: action.sheetUrl,
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