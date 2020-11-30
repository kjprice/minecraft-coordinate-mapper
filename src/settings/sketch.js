export const CANVAS_WIDTH = 700;
export const CANVAS_HEIGHT = 700;

export const BOX_HEIGHT = 10;

export const middleX = CANVAS_WIDTH / 2;
export const middleY = CANVAS_HEIGHT / 2;

export const translationsPerAxis = [
    CANVAS_WIDTH / 2,
    -CANVAS_HEIGHT / 2,
    650 // TODO: This is hard coded, but should zoom in based on the coordinates of the points
]