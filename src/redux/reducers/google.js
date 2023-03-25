import {
    GOOGLE_SET_ACCESS_TOKEN,
    SET_GOOGLE_SELECTED_SHEET,
    SET_GOOGLE_SELECTED_SHEET_SHEETS,
    SET_SELECT_SHEET_NAME,
    GOOGLE_SELECT_SPREADSHEET_INIT,
    SET_SPREADSHEET_DATA,
} from '../actions/google';

import defaultSheetValues from '../../settings/gabeAndKjSpreadsheetValues.json'

const DEBUG = true;
  
let initialState = {
    accessToken: null,
    sheet: {},
    spreadsheetSelectedStatus: null,
};

if (DEBUG) {
    initialState.sheet = {
        sheetNames: ['Gabe And KJ'],
        spreadsheetData: defaultSheetValues,
        url: 'https://docs.google.com/spreadsheets/d/1-Yx5E-JU70AJ-QcE6NzncnkEGdTixo68dgLnWxIDkS8/edit#gid=0',
        name: 'Gabe And KJ',
        id: '1-Yx5E-JU70AJ-QcE6NzncnkEGdTixo68dgLnWxIDkS8',
        selectedSheetName: 'Gabe And KJ'
    }
}
if (localStorage.google) {
    initialState = JSON.parse(localStorage.google);
    initialState.accessToken = null;
}

function getGoogleState(state, action) {
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
        case SET_GOOGLE_SELECTED_SHEET_SHEETS:
            return {
                ...state,
                sheet: {
                    ...state.sheet,
                    sheetNames: action.sheetNames,
                    selectedSheetName: action.sheetNames[0]
                }
            }
        case SET_SELECT_SHEET_NAME:
            return {
                ...state,
                sheet: {
                    ...state.sheet,
                    selectedSheetName: action.sheetName
                }
            }
            case GOOGLE_SELECT_SPREADSHEET_INIT:
                return {
                    ...state,
                    spreadsheetSelectedStatus: 'inprogress'
                }
        case SET_SPREADSHEET_DATA:
            return {
                ...state,
                sheet: {
                    ...state.sheet,
                    spreadsheetData: action.spreadsheetData,
                }
            }
            default:
        return state;
    }
}

export default function googleState(state = initialState, action) {
    const newState = getGoogleState(state, action);
    localStorage.google = JSON.stringify(newState);
    return newState;
}