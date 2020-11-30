export default function calcDistances(positions1, positions2) {
    const diffs = [];
    positions1.forEach((p1, i) => {
        const p2 = positions2[i];
        diffs.push(p2 - p1);
    });

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