import { SKETCH_SET_DIMENSION_TYPE, SKETCH_SET_ICON_SETTING_VALUE, SKETCH_SET_COORDINATES_FROM_SHEET } from "../actions/sketch";

import coordinatesFromSpreadsheetValues from '../../utils/coordinatesFromSpreadsheetValues';
import defaultSheetValues from '../../settings/gabeAndKjSpreadsheetValues.json'
// import coordinatesFromSpreadsheetValues from '../../utils/coordinatesFromSpreadsheetValues';

import defaultSketchSettingsState from "../../settings/defaultSketchSettings";

import { setSketchIconSettingValue } from "../../utils/sketchSettingTools";

const DEFAULT_COORDINATES = coordinatesFromSpreadsheetValues(defaultSheetValues);


const createAverageZ = (coordinates) => {
  const sum = coordinates.reduce((a, c) => a + getZfromCoordinate(c), 0);

  return sum / coordinates.length;
}


const getZfromCoordinate = (point = {}) => {
  return point.z || 0;
}

const createCoordinatesState = coordinates => {
  return {
      coordinates,
      coordinateStartId: coordinates[0].id,
      coordinateEndId: coordinates[coordinates.length - 1].id,
      averageZ: createAverageZ(coordinates), // TODO: Fix this
  }
}

let initialState = {
  dimensionType: '3d',
  sketchSettings: defaultSketchSettingsState,
  coordinates: createCoordinatesState(DEFAULT_COORDINATES),
};

if (localStorage.sketch) {
  initialState = JSON.parse(localStorage.sketch);
}

function getSketchState(state, action) {
  switch (action.type) {
    case SKETCH_SET_DIMENSION_TYPE:
      return {
        ...state,
        dimensionType: action.dimension,
      };
    case SKETCH_SET_ICON_SETTING_VALUE:
      return setSketchIconSettingValue(state, action.iconText, action.settingType, action.settingValue);
    case SKETCH_SET_COORDINATES_FROM_SHEET:
      return {
        ...state,
        coordinates: createCoordinatesState(coordinatesFromSpreadsheetValues(action.spreadsheetData)),
      }
    default:
      return state;
  }
}

export default function sketchState(state = initialState, action) {
  const newState = getSketchState(state, action);
  localStorage.sketch = JSON.stringify(newState);
  return newState;
}
