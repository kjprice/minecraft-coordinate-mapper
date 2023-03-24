// Taken from https://htmlcolorcodes.com/
export const COLOR_CODES = {
  white:	{hex: '#FFFFFF', rgb: [255, 255, 255]},
  silver:	{hex: '#C0C0C0', rgb: [192, 192, 192]},
  gray:	{hex: '#808080', rgb: [128, 128, 128]},
  black:	{hex: '#000000', rgb: [0, 0, 0]},
  red:	{hex: '#FF0000', rgb: [255, 0, 0]},
  maroon:	{hex: '#800000', rgb: [128, 0, 0]},
  yellow:	{hex: '#FFFF00', rgb: [255, 255, 0]},
  olive:	{hex: '#808000', rgb: [128, 128, 0]},
  lime:	{hex: '#00FF00', rgb: [0, 255, 0]},
  green:	{hex: '#008000', rgb: [0, 128, 0]},
  aqua:	{hex: '#00FFFF', rgb: [0, 255, 255]},
  teal:	{hex: '#008080', rgb: [0, 128, 128]},
  blue:	{hex: '#0000FF', rgb: [0, 0, 255]},
  navy:	{hex: '#000080', rgb: [0, 0, 128]},
  fuchsia:	{hex: '#FF00FF', rgb: [255, 0, 255]},
  purple:	{hex: '#800080', rgb: [128, 0, 128]},
}

export const colorToHexCode = (color) => {
  if (color[0] === '#') {
    return color;
  }

  if (!COLOR_CODES[color]) {
    throw new Error(`Unknown color name: ${color}`);
  }

  return COLOR_CODES[color].hex;
}
