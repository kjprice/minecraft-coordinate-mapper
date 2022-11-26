export const GOOGLE_SHEET_SET_SPREADSHEET_URL = 'GOOGLE_SHEET_SET_SPREADSHEET_URL';

export const setSpreadsheetUrl = (spreadsheetUrl) => ({
    type: GOOGLE_SHEET_SET_SPREADSHEET_URL,
    spreadsheetUrl
});
