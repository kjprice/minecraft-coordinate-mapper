import store from '../store';

export const GOOGLE_SET_ACCESS_TOKEN = 'GOOGLE_SET_ACCESS_TOKEN';
export const GOOGLE_PICKER_MESSAGE = 'GOOGLE_PICKER_MESSAGE';
export const GOOGLE_SELECT_SPREADSHEET_INIT = 'GOOGLE_SELECT_SPREADSHEET_INIT';

export const setGoogleAccessToken = (accessToken) => ({
    type: GOOGLE_SET_ACCESS_TOKEN,
    accessToken
});

export const setGooglePickerMessage = (pickerMessage) => ({
    type: GOOGLE_PICKER_MESSAGE,
    pickerMessage
});


export const setGoogleSelectSpreasheetInit = () => ({
    type: GOOGLE_SELECT_SPREADSHEET_INIT
});

