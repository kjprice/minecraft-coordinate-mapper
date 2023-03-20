// TODO: store spreadsheet sheet names (and preference to use)

import {
  GOOGLE_SHEET_SET_EDIT_SPREADSHEET_URL,
  GOOGLE_SHEET_SET_SELECTED_SPREADSHEET_URL,
  GOOGLE_SHEET_SET_SHEET_VALUES,
  GOOGLE_SHEET_SET_SHEET_NAMES,
  GOOGLE_SHEET_SET_AUTHENTICATED,
  GOOGLE_SHEET_SET_SELECTED_SPREADSHEET_SHEET_NAME,
  GOOGLE_SHEET_SET_SPREADSHEETNAME,
  MINECRAFT_SET_FROM_POINT,
  MINECRAFT_SET_TO_POINT,
} from '../actions/googleSheets';

import coordinatesFromSpreadsheetValues from '../../utils/coordinatesFromSpreadsheetValues';

import defaultSheetValues from '../../settings/gabeAndKjSpreadsheetValues.json'

const DEFAULT_URL = 'https://docs.google.com/spreadsheets/d/1-Yx5E-JU70AJ-QcE6NzncnkEGdTixo68dgLnWxIDkS8/edit#gid=0'
const DEFAULT_SHEET_NAME = 'Gabe And KJ';

const DEFAULT_COORDINATES = coordinatesFromSpreadsheetValues(defaultSheetValues);


const getZfromCoordinate = (point = {}) => {
  return point.z || 0;
}
const createAverageZ = (coordinates) => {
  const sum = coordinates.reduce((a, c) => a + getZfromCoordinate(c), 0);

  return sum / coordinates.length;
}

const createCoordinatesState = coordinates => {
  if (!coordinates) {
    return {};
  }
  return {
    coordinates,
    coordinateStartId: coordinates[0].id,
    coordinateEndId: coordinates[coordinates.length - 1].id,
    averageZ: createAverageZ(coordinates), // TODO: Fix this
  }
}

const DEFAULT_DEMO_STATE = {
  isAuthenticated: false,
  editSpreadsheetUrl: DEFAULT_URL,
  selectedSpreadsheetUrl: DEFAULT_URL,
  ...createCoordinatesState(DEFAULT_COORDINATES),
  infoBySpreadsheetUrl: {
    [DEFAULT_URL]: {
      name: 'kj',
      // keyId: '1-Yx5E-JU70AJ-QcE6NzncnkEGdTixo68dgLnWxIDkS8',
      sheets: [DEFAULT_SHEET_NAME],
      selectedSheet: DEFAULT_SHEET_NAME,
      valuesBySheetName: {
        [DEFAULT_SHEET_NAME]: defaultSheetValues
      }
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
  localStorage.coordinates = JSON.stringify(state.coordinates);

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
  const coordinates = JSON.parse(localStorage.coordinates);

  return { infoBySpreadsheetUrl, editSpreadsheetUrl, selectedSpreadsheetUrl, ...createCoordinatesState(coordinates) };
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

const updateSpreadsheetFieldByUrl = (state, spreadsheetUrl, fieldName, value) => {
  const spreadsheetInfo = state.infoBySpreadsheetUrl[spreadsheetUrl];

  return {
    ...state,
    infoBySpreadsheetUrl: {
      ...state.infoBySpreadsheetUrl,
      [spreadsheetUrl]: {
        ...spreadsheetInfo,
        [fieldName]: value
      }
    }
  }
}

const updateSelectedSpreadsheetField = (state, fieldName, value) => {
  const { selectedSpreadsheetUrl } = state;

  return updateSpreadsheetFieldByUrl(state, selectedSpreadsheetUrl, fieldName, value)
}

const setSelectedSheet = (state, sheetName) => {
  return updateSelectedSpreadsheetField(state, 'selectedSheet', sheetName);
};

const setAuthenticated = (state) => {
  return {
    ...state,
    isAuthenticated: true,
  }
};

const setSheetNames = (state, sheetNames) => {
  return updateSelectedSpreadsheetField(state, 'sheets', sheetNames);
};

const setSpreadsheetName = (state, spreadsheetName) => {
  return updateSelectedSpreadsheetField(state, 'name', spreadsheetName);
};

const setSheetValues = (state, sheetValues) => {
  console.log({sheetValues})
  const spreadsheetInfo = state.infoBySpreadsheetUrl[state.selectedSpreadsheetUrl];
  const { selectedSheet, valuesBySheetName } = spreadsheetInfo;

  const newValuesBySheetName = {
    ...valuesBySheetName,
    [selectedSheet]: sheetValues,
  }
  return updateSelectedSpreadsheetField(state, 'valuesBySheetName', newValuesBySheetName);
};

const setToPoint = (state, coordinateId) => {
  return {
    ...state,
    coordinateStartId: coordinateId
  }
}

const setFromPoint = (state, coordinateId) => {
  return {
    ...state,
    coordinateEndId: coordinateId
  }
}

const setSelectedSpreadsheetSheetName = (state, selectedSheetName) => {
  const spreadsheetValues = state.infoBySpreadsheetUrl[state.selectedSpreadsheetUrl].valuesBySheetName[selectedSheetName];
  console.log({spreadsheetValues})
  return {
    ...updateSelectedSpreadsheetField(state, 'selectedSheet', selectedSheetName),
    // ...createCoordinatesState(spreadsheetValues)
  };
}

export default function googleSheetsState(state = getInitialState(), action) {
  switch (action.type) {
    case GOOGLE_SHEET_SET_EDIT_SPREADSHEET_URL:
      return setStateToLocalStorage(setEditSpreadsheetUrl(state, action.editSpreadsheetUrl));
    case GOOGLE_SHEET_SET_SELECTED_SPREADSHEET_URL:
      return setStateToLocalStorage(setSelectedSpreadsheetUrl(state, action.selectedSpreadsheetUrl));
    case GOOGLE_SHEET_SET_AUTHENTICATED:
      return setAuthenticated(state);
    case GOOGLE_SHEET_SET_SHEET_NAMES:
      return setStateToLocalStorage(setSheetNames(state, action.sheetNames));
    case GOOGLE_SHEET_SET_SPREADSHEETNAME:
      return setStateToLocalStorage(setSpreadsheetName(state, action.spreadsheetName));
    case GOOGLE_SHEET_SET_SHEET_VALUES:
      return setStateToLocalStorage(setSheetValues(state, action.sheetValues));
    case GOOGLE_SHEET_SET_SELECTED_SPREADSHEET_SHEET_NAME:
      return setStateToLocalStorage(setSelectedSpreadsheetSheetName(state, action.selectedSheetName));
    case MINECRAFT_SET_FROM_POINT:
      return setFromPoint(state, action.coordinateId)
    case MINECRAFT_SET_TO_POINT:
      return setToPoint(state, action.coordinateId)
  
    default:
      return state;
  }
}