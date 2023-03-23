import { SKETCH_SET_DIMENSION_TYPE } from "../actions/sketch";

let initialState = {
  dimensionType: '3d'
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
    default:
      return state;
  }
}

export default function sketchState(state = initialState, action) {
  const newState = getSketchState(state, action);
  localStorage.sketch = JSON.stringify(newState);
  return newState;
}
