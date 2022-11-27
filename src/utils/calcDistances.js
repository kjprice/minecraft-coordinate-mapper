export default function calcDistances(coordinates1, coordinates2) {
    const diffs = [
        coordinates2.x - coordinates1.x,
        coordinates2.y - coordinates1.y,
        coordinates2.z - coordinates1.z,
    ];

    const diffsSquared = diffs.map(d => d * d);
    const sumSquaredDiffs = diffsSquared.reduce((v, d) => v + d, 0);;
    const totalDistance = Math.sqrt(sumSquaredDiffs).toFixed(2);
    const steps = diffs.map(diff => (diff / totalDistance).toFixed(2));

    return {
        diffs,
        steps,
        totalDistance
    };
}