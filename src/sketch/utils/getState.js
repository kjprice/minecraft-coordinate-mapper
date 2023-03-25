import store from "../../redux/store";

const getState = () => store.getState();

export const getCoordinatesFromState = () => getState().sketch.coordinates;

const getSketchSettingsFromState = () => getState().sketch.sketchSettings;
export const getIconSettingsByTextsFromState = () => getSketchSettingsFromState().iconSettingsByText;
