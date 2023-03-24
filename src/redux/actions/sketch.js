export const SKETCH_SET_DIMENSION_TYPE = 'SKETCH_SET_DIMENSION_TYPE';
export const SKETCH_SET_ICON_SETTING_VALUE = 'SKETCH_SET_ICON_SETTING_VALUE';
export const SKETCH_SET_COORDINATES_FROM_SHEET = 'SKETCH_SET_COORDINATES_FROM_SHEET';

export const setSketchDimensionType = (dimension) => ({
    type: SKETCH_SET_DIMENSION_TYPE,
    dimension
});


export const setIconSettingValue = (iconText, settingType, settingValue) => ({
  type: SKETCH_SET_ICON_SETTING_VALUE,
  iconText,
  settingType,
  settingValue
});

export const setCoordinatesFromSheet = (spreadsheetData) => ({
  type: SKETCH_SET_COORDINATES_FROM_SHEET,
  spreadsheetData,
});
