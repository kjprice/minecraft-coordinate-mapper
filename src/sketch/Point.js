/* eslint-disable no-undef */
export default class Point {
    name = null;
    coordinates = [];

    constructor(name, coordinates) {
        this.coordinates = coordinates;

        this.name = name;
    }
}