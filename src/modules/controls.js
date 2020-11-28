import POSITIONS from './Positions.js';

function getControlContainer() {
    document.querySelector('#controls');
}

function getPositionNames() {
    return Object.keys(POSITIONS);
}

function createDropDown(id) {
    const selectControl = document.createElement('select');

    const names = getPositionNames();
    const dropDownOptions = names.map((name) => document.createElement('option'))
}

function createFromDropDown() {
}

function createDropDowns() {
    const controlContainer = getControlContainer();


}