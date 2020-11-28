import Point from './Point';

const Points = {
    points: null,

    init(positions) {
        const names = Object.keys(positions);
        this.points = names.map(name => {
            const coordinates = positions[name];
    
            return new Point(name, coordinates);
        });
    }
}

export default Points;