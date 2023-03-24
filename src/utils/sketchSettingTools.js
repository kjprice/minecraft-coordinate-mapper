
export const setMutableObjectKeyValue = (obj, key, value) => {
  return {
    ...obj,
    [key]: value
  }
}

export const setSketchSetting = (sketchState, settingKey, settingValue) => {
  return {
    ...sketchState,
    sketchSettings: setMutableObjectKeyValue(sketchState.sketchSettings, settingKey, settingValue)
  };
}

export const creatSketchIconSetting = (iconText, color, shape) => ({
  [iconText]: {color, shape}
})

export const setSketchIconSettingValue = (sketchState, iconText, settingKey, settingValue) => {
  const oldIconSettings = sketchState.sketchSettings.iconSettingsByText;
  const oldIconSelectedSettings = oldIconSettings[iconText];
  const newIconSelectedSettings = setMutableObjectKeyValue(oldIconSelectedSettings, settingKey, settingValue);
  const newIconSettings = setMutableObjectKeyValue(oldIconSettings, iconText, newIconSelectedSettings);
  return setSketchSetting(sketchState, 'iconSettingsByText', newIconSettings);
};