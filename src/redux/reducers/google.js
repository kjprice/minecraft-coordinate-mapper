import {
    GOOGLE_SET_ACCESS_TOKEN,
    SET_GOOGLE_SELECTED_SHEET,
    SET_GOOGLE_SELECTED_SHEET_SHEETS,
    GOOGLE_SELECT_SPREADSHEET_INIT,
    SET_SPREADSHEET_DATA,
} from '../actions/google';
import coordinatesFromSpreadsheetValues from '../../utils/coordinatesFromSpreadsheetValues';

import defaultSheetValues from '../../settings/gabeAndKjSpreadsheetValues.json'
// import coordinatesFromSpreadsheetValues from '../../utils/coordinatesFromSpreadsheetValues';

const DEFAULT_COORDINATES = coordinatesFromSpreadsheetValues(defaultSheetValues);

const createAverageZ = (coordinates) => {
    const sum = coordinates.reduce((a, c) => a + getZfromCoordinate(c), 0);
  
    return sum / coordinates.length;
}

  
const getZfromCoordinate = (point = {}) => {
    return point.z || 0;
}
  
const createCoordinatesState = coordinates => {
    return {
        coordinates,
        coordinateStartId: coordinates[0].id,
        coordinateEndId: coordinates[coordinates.length - 1].id,
        averageZ: createAverageZ(coordinates), // TODO: Fix this
    }
}

const DEBUG = true;
  
let initialState = {
    accessToken: null,
    sheet: {},
    spreadsheetSelectedStatus: null,
};

if (DEBUG) {
    initialState.sheet = {
        ...createCoordinatesState(DEFAULT_COORDINATES),
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
                    coordinates: coordinatesFromSpreadsheetValues(action.spreadsheetData)
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