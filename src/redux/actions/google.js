import store from '../store';

export const GOOGLE_SET_ACCESS_TOKEN = 'GOOGLE_SET_ACCESS_TOKEN';
export const GOOGLE_SELECTED_SHEET_URL = 'GOOGLE_SELECTED_SHEET_URL';
export const GOOGLE_SELECT_SPREADSHEET_INIT = 'GOOGLE_SELECT_SPREADSHEET_INIT';

export const setGoogleAccessToken = (accessToken) => ({
    type: GOOGLE_SET_ACCESS_TOKEN,
    accessToken
});

export const setSelectSheetUrl = (sheetUrl) => ({
    type: GOOGLE_SELECTED_SHEET_URL,
    sheetUrl
});


export const setGoogleSelectSpreasheetInit = () => ({
    type: GOOGLE_SELECT_SPREADSHEET_INIT
});

