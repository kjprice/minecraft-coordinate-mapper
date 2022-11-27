export const GOOGLE_SHEET_SET_EDIT_SPREADSHEET_URL = 'GOOGLE_SHEET_SET_EDIT_SPREADSHEET_URL';
export const GOOGLE_SHEET_SET_SELECTED_SPREADSHEET_URL = 'GOOGLE_SHEET_SET_SELECTED_SPREADSHEET_URL';
export const GOOGLE_SHEET_SET_SHEET_VALUES = 'GOOGLE_SHEET_SET_SHEET_VALUES';
export const GOOGLE_SHEET_SET_SHEET_NAMES = 'GOOGLE_SHEET_SET_SHEET_NAMES';
export const GOOGLE_SHEET_SET_AUTHENTICATED = 'GOOGLE_SHEET_SET_AUTHENTICATED';
export const GOOGLE_SHEET_SET_SELECTED_SHEET_NAME = 'GOOGLE_SHEET_SET_SELECTED_SHEET_NAME';
export const MINECRAFT_SET_FROM_POINT = 'MINECRAFT_SET_FROM_POINT';
export const MINECRAFT_SET_TO_POINT = 'MINECRAFT_SET_TO_POINT';

export const setFromPoint = (coordinateId) => ({
    type: MINECRAFT_SET_FROM_POINT,
    coordinateId
});

export const setToPoint = (coordinateId) => ({
    type: MINECRAFT_SET_TO_POINT,
    coordinateId
});

export const setSelectedSheet = (sheetName) => ({
  type: GOOGLE_SHEET_SET_SELECTED_SHEET_NAME
});

export const setAuthenticated = () => ({
  type: GOOGLE_SHEET_SET_AUTHENTICATED
});

export const setSheetNames = (sheetNames) => ({
  type: GOOGLE_SHEET_SET_SHEET_NAMES,
  sheetNames
});

export const setSheetValues = (sheetValues) => ({
  type: GOOGLE_SHEET_SET_SHEET_VALUES,
  sheetValues
});

export const setEditSpreadsheetUrl = (editSpreadsheetUrl) => ({
  type: GOOGLE_SHEET_SET_EDIT_SPREADSHEET_URL,
  editSpreadsheetUrl
});

export const setSelectedSpreadsheetUrl = (selectedSpreadsheetUrl) => ({
  type: GOOGLE_SHEET_SET_SELECTED_SPREADSHEET_URL,
  selectedSpreadsheetUrl
});
