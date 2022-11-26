export const GOOGLE_SHEET_SET_EDIT_SPREADSHEET_URL = 'GOOGLE_SHEET_SET_EDIT_SPREADSHEET_URL';
export const GOOGLE_SHEET_SET_SELECTED_SPREADSHEET_URL = 'GOOGLE_SHEET_SET_EDIT_SPREADSHEET_URL';

export const setEditSpreadsheetUrl = (editSpreadsheetUrl) => ({
  type: GOOGLE_SHEET_SET_EDIT_SPREADSHEET_URL,
  editSpreadsheetUrl
});

export const setSelectedSpreadsheetUrl = (selectedSpreadsheetUrl) => ({
  type: GOOGLE_SHEET_SET_SELECTED_SPREADSHEET_URL,
  selectedSpreadsheetUrl
});

