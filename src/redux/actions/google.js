export const GOOGLE_SET_ACCESS_TOKEN = 'GOOGLE_SET_ACCESS_TOKEN';
export const SET_GOOGLE_SELECTED_SHEET = 'SET_GOOGLE_SELECTED_SHEET';
export const GOOGLE_SELECT_SPREADSHEET_INIT = 'GOOGLE_SELECT_SPREADSHEET_INIT';

export const setGoogleAccessToken = (accessToken) => ({
    type: GOOGLE_SET_ACCESS_TOKEN,
    accessToken
});

export const setSelectedGoogleSheet = (url, name, id) => ({
    type: SET_GOOGLE_SELECTED_SHEET,
    url, name, id
});


export const setGoogleSelectSpreasheetInit = () => ({
    type: GOOGLE_SELECT_SPREADSHEET_INIT
});

