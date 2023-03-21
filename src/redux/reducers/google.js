import {
    GOOGLE_SET_ACCESS_TOKEN,
    SET_GOOGLE_SELECTED_SHEET,
    GOOGLE_SELECT_SPREADSHEET_INIT,
} from '../actions/google';


const initialState = {
    accessToken: null,
    sheet: {},
    spreadsheetSelectedStatus: null,
};

export default function googleState(state = initialState, action) {
    switch(action.type) {
        case GOOGLE_SET_ACCESS_TOKEN:
            return {
                ...state,
                accessToken: action.accessToken,
            }
        case SET_GOOGLE_SELECTED_SHEET:
            console.log({action})
            return {
                ...state,
                sheet: {
                    url: action.url,
                    name: action.name,
                    id: action.id,
                },
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