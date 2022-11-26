import {
  GOOGLE_SHEET_SET_SPREADSHEET_URL
} from '../actions/googleSheets';

const DEFAULT_URL = 'https://docs.google.com/spreadsheets/d/1-Yx5E-JU70AJ-QcE6NzncnkEGdTixo68dgLnWxIDkS8/edit#gid=0'

const DEFAULT_DEMO_STATE = {
  spreadsheetUrl: DEFAULT_URL,
  infoBySpreadsheetUrl: {
    [DEFAULT_URL]: {
      keyId: '1-Yx5E-JU70AJ-QcE6NzncnkEGdTixo68dgLnWxIDkS8',
      sheets: ['Sheet1'],
      selectedSheet: 'Sheet1',
      primary: true,
    }
  }
};

const getLocalStorageKeyForSpreadsheetUrl = (spreadsheetUrl) => {
  return `spreadsheetByUrl_${spreadsheetUrl}`;
}

const getStateFromLocalStorage = () => {
  if (!localStorage.spreadsheetUrls) {
    return null;
  }

  const spreadsheetUrls = JSON.parse(localStorage.spreadsheetUrls);

  const infoBySpreadsheetUrl = {};
  spreadsheetUrls.forEach(spreadsheetUrl => {
    const localStorageKey = getLocalStorageKeyForSpreadsheetUrl(spreadsheetUrl);
    const localStorageInfo = JSON.parse(localStorage[localStorageKey]);
    infoBySpreadsheetUrl[spreadsheetUrl] = localStorageInfo;
  });

  const { spreadsheetUrl } = localStorage;

  return { infoBySpreadsheetUrl, spreadsheetUrl };
}

const getInitialState = () => {
  const stateFromLocalStorage = getStateFromLocalStorage();

  return stateFromLocalStorage || DEFAULT_DEMO_STATE;
}

const updateSpreadsheetUrl = (state, spreadsheetUrl) => {
  return {
    ...state,
    spreadsheetUrl
  }
};

export default function googleSheetsState(state = getInitialState(), action) {
  switch (action.type) {
    case GOOGLE_SHEET_SET_SPREADSHEET_URL:
      return updateSpreadsheetUrl(state, action.spreadsheetUrl);
    default:
      return state;
  }
}