import {creatSketchIconSetting} from '../utils/sketchSettingTools';

import { colorToHexCode as c } from '../utils/colorTools';

const defaultSketchSettingsState = {
  iconSettingsByText: {
    ...creatSketchIconSetting('city', c('purple'), 'circle'),
    ...creatSketchIconSetting('tower', c('teal'), 'circle'),
    ...creatSketchIconSetting('ship', c('green'), 'square'),
    ...creatSketchIconSetting('portal', c('yellow'), 'triangle'),
  }
};

export default defaultSketchSettingsState;