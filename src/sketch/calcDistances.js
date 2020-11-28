export default function calcDistances(positions1, positions2) {
    const diffs = [];
    positions1.forEach((p1, i) => {
        const p2 = positions2[i];
        diffs.push(p1 - p2);
    });

    const diffsSquared = diffs.map(d => d * d);
    const sumSquaredDiffs = diffsSquared.reduce((v, d) => v + d, 0);;
    const totalDistance = Math.sqrt(sumSquaredDiffs);
    const steps = diffs.map(diff => diff / totalDistance)
    console.log({totalDistance, diffs, steps});

    return diffs;
}