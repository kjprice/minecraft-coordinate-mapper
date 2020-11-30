const filterByName = (points, name) => {
    return points.filter(p => p.name === name)[0]
}

export default function getStartingEndingPoints(fromPointName,
    toPointName,
    points) {
    
    const startPoint = filterByName(points, fromPointName);
    if (!startPoint) {
        return null;
    }
    const endPoint = filterByName(points, toPointName);
    if (!endPoint) {
        return null;
    }

    return {
        startPoint, endPoint
    }
}
