import {
  GOOGLE_SHEET_SET_EDIT_SPREADSHEET_URL
} from '../actions/googleSheets';

const DEFAULT_URL = 'https://docs.google.com/spreadsheets/d/1-Yx5E-JU70AJ-QcE6NzncnkEGdTixo68dgLnWxIDkS8/edit#gid=0'

const DEFAULT_DEMO_STATE = {
  editSpreadsheetUrl: DEFAULT_URL,
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


const setStateToLocalStorage = (state) => {
  if (!state.infoBySpreadsheetUrl) {
    return;
  }

  const spreadsheetUrls = Object.keys(state.infoBySpreadsheetUrl);

  spreadsheetUrls.forEach(spreadsheetUrl => {
    const spreadsheetInfo = state.infoBySpreadsheetUrl[spreadsheetUrl];
    const localStorageKey = getLocalStorageKeyForSpreadsheetUrl(spreadsheetUrl);
    localStorage[localStorageKey] = JSON.stringify(spreadsheetInfo);
  });

  localStorage.spreadsheetUrls = JSON.stringify(spreadsheetUrls);
  localStorage.editSpreadsheetUrl = state.editSpreadsheetUrl;

  return state;
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

  const { editSpreadsheetUrl } = localStorage;

  return { infoBySpreadsheetUrl, editSpreadsheetUrl };
}

const getInitialState = () => {
  const stateFromLocalStorage = getStateFromLocalStorage();

  return stateFromLocalStorage || DEFAULT_DEMO_STATE;
}

const updateSpreadsheetUrl = (state, editSpreadsheetUrl) => {
  return {
    ...state,
    editSpreadsheetUrl
  }
};

export default function googleSheetsState(state = getInitialState(), action) {
  switch (action.type) {
    case GOOGLE_SHEET_SET_EDIT_SPREADSHEET_URL:
      return setStateToLocalStorage(updateSpreadsheetUrl(state, action.editSpreadsheetUrl));
    default:
      return state;
  }
}