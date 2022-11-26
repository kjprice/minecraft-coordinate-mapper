

import {
  GOOGLE_SHEET_SET_EDIT_SPREADSHEET_URL,
  GOOGLE_SHEET_SET_SELECTED_SPREADSHEET_URL,
} from '../actions/googleSheets';

const DEFAULT_URL = 'https://docs.google.com/spreadsheets/d/1-Yx5E-JU70AJ-QcE6NzncnkEGdTixo68dgLnWxIDkS8/edit#gid=0'

const DEFAULT_DEMO_STATE = {
  editSpreadsheetUrl: DEFAULT_URL,
  selectedSpreadsheetUrl: DEFAULT_URL,
  infoBySpreadsheetUrl: {
    [DEFAULT_URL]: {
      keyId: '1-Yx5E-JU70AJ-QcE6NzncnkEGdTixo68dgLnWxIDkS8',
      sheets: ['Sheet1'],
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
  localStorage.selectedSpreadsheetUrl = state.selectedSpreadsheetUrl;

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

  const { editSpreadsheetUrl, selectedSpreadsheetUrl } = localStorage;

  return { infoBySpreadsheetUrl, editSpreadsheetUrl, selectedSpreadsheetUrl };
}

const getInitialState = () => {
  const stateFromLocalStorage = getStateFromLocalStorage();

  return stateFromLocalStorage || DEFAULT_DEMO_STATE;
}

const setEditSpreadsheetUrl = (state, editSpreadsheetUrl) => {
  return {
    ...state,
    editSpreadsheetUrl
  }
};

const setSelectedSpreadsheetUrl = (state, selectedSpreadsheetUrl) => {
  return {
    ...state,
    selectedSpreadsheetUrl
  }
};

export default function googleSheetsState(state = getInitialState(), action) {
  switch (action.type) {
    case GOOGLE_SHEET_SET_EDIT_SPREADSHEET_URL:
      return setStateToLocalStorage(setEditSpreadsheetUrl(state, action.editSpreadsheetUrl));
    case GOOGLE_SHEET_SET_SELECTED_SPREADSHEET_URL:
      return setStateToLocalStorage(setSelectedSpreadsheetUrl(state, action.selectedSpreadsheetUrl));
    default:
      return state;
  }
}