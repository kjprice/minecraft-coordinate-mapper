export const GOOGLE_SET_ACCESS_TOKEN = 'GOOGLE_SET_ACCESS_TOKEN';
export const SET_GOOGLE_SELECTED_SHEET = 'SET_GOOGLE_SELECTED_SHEET';
export const SET_GOOGLE_SELECTED_SHEET_SHEETS = 'SET_GOOGLE_SELECTED_SHEET_SHEETS';
export const SET_SPREADSHEET_DATA = 'SET_SPREADSHEET_DATA';
export const GOOGLE_SELECT_SPREADSHEET_INIT = 'GOOGLE_SELECT_SPREADSHEET_INIT';

export const setGoogleAccessToken = (accessToken) => ({
    type: GOOGLE_SET_ACCESS_TOKEN,
    accessToken
});

export const setSelectedGoogleSheet = (url, name, id) => ({
    type: SET_GOOGLE_SELECTED_SHEET,
    url, name, id
});

export const setSelectedGoogleSheetSheets = (sheetNames) => ({
    type: SET_GOOGLE_SELECTED_SHEET,
    sheetNames
});


export const setGoogleSelectSpreasheetInit = () => ({
    type: GOOGLE_SELECT_SPREADSHEET_INIT
});


export const setSpreadsheetData = (spreadsheetData, id) => ({
    type: SET_SPREADSHEET_DATA,
    spreadsheetData, id
});

