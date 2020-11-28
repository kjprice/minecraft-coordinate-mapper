import Point from '../../sketch/Point';

export default function createPoints(positionsByName) {
    const names = Object.keys(positionsByName);
    const points = names.map(name => {
        const coordinates = positionsByName[name];

        return new Point(name, coordinates);
    });

    return points;
}