import {creatSketchIconSetting} from '../utils/sketchSettingTools';

import { colorToHexCode as c } from '../utils/colorTools';

const defaultSketchSettingsState = {
  iconSettingsByText: {
    ...creatSketchIconSetting('tower', c('red'), 'square'),
    ...creatSketchIconSetting('ship', c('purple'), 'square'),
    ...creatSketchIconSetting('portal', c('yellow'), 'square'),
    ...creatSketchIconSetting('city', c('green'), 'square'),
  }
};

export default defaultSketchSettingsState;