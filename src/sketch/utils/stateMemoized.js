import { getCoordinatesFromState, getIconSettingsByTextsFromState } from "./getState";
import flattenCoordinatesInfo from "./flattenCoordinatesInfo";
import PointPositions from "./PointPositions";

class MemoizedState {
  stateObject = null;
  memoizedObject = null;

  get(force = false) {
    const newStateObject = this.getFromState();
    if (!newStateObject) {
      return null;
    }

    if (!force && newStateObject === this.stateObject) {
      return this.memoizedObject;
    }

    this.stateObject = newStateObject;
    this.memoizedObject = this.constructNewObject();

    return this.memoizedObject;
  }

  getFromState() {
    throw new Error("Method 'getFromState()' must be implemented.");
  }

  constructNewObject() {
    throw new Error("Method 'constructNewObject()' must be implemented.");
  }
}

class MemoizedCoordinates extends MemoizedState {
  getFromState() {
    return getCoordinatesFromState();
  }
  constructNewObject() {
    return flattenCoordinatesInfo(this.stateObject);
  }
}

class MemoizedPointPositions extends MemoizedState {
  constructor() {
    super();
    this.p = null;
    this.coordinates = null;
  }
  getFromState() {
    return getIconSettingsByTextsFromState();
  }
  constructNewObject() {
    return new PointPositions(this.coordinates, this.p, this.stateObject);
  }
  getWithArgs(coordinates, p) {
    this.p = p;

    let force = false;
    if (this.coordinates !== coordinates) {
      force = true;
      this.coordinates = coordinates;
    }

    return this.get(force);
  }
}

const memoizedCoordinates = new MemoizedCoordinates();
export const getCoordinates = () => {
  return memoizedCoordinates.get();
};

const memoizedPointPositions = new MemoizedPointPositions();
export const getPointPositions = (coordinates, p) => {
  return memoizedPointPositions.getWithArgs(coordinates, p);
};