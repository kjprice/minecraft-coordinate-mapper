import React from "react";
import { connect } from "react-redux";
import IconSettingOption from "./IconSettingOption";

import { setIconSettingValue } from "../../../redux/actions/sketch";

const mapStateToProp = (state) => {
  const { sketch } = state;

  const { sketchSettings } = sketch;
  return {
    iconSettingsByText: sketchSettings.iconSettingsByText
  };
};

const renderIconSettingOption = (iconInfo, onSettingChange) => {
  const { text, color, shape } = iconInfo;
  return <IconSettingOption key={text} text={text} color={color} shape={shape} onChange={onSettingChange}/>
}

const IconSettings = props => {
  const {iconSettingsByText, setIconSettingValue} = props;

  const onSettingChange = setIconSettingValue;

  const iconTexts = Object.keys(iconSettingsByText);
  const iconInfo = iconTexts.map((text) => ({
    ...iconSettingsByText[text],
    text
  }))
  return iconInfo.map(icon => renderIconSettingOption(icon, onSettingChange));
}

const actions = {
  setIconSettingValue,
};

export default connect(mapStateToProp, actions)(IconSettings);
