const flattenCoordinatesInfo = (coordinatesState) => {
  const { coordinateStartId, coordinateEndId, coordinates, averageZ } =
    coordinatesState;
  console.log("coordinates changed");
  return coordinates.map((coordinateInfo) => ({
    ...coordinateInfo,
    isStarting: coordinateInfo.id === coordinateStartId,
    isEnding: coordinateInfo.id === coordinateEndId,
    averageZ,
  }));
};

export default flattenCoordinatesInfo;
