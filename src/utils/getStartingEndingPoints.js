const filterById = (coordinates, id) => {
    return coordinates.filter(p => p.id === id)[0]
}

export default function getStartingEndingPoints(coordinateStartId,
    coordinateEndId,
    coordinates) {
    
    const startPoint = filterById(coordinates, coordinateStartId);
    if (!startPoint) {
        return null;
    }
    const endPoint = filterById(coordinates, coordinateEndId);
    if (!endPoint) {
        return null;
    }

    return {
        startPoint, endPoint
    }
}
