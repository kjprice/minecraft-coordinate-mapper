/* eslint-disable no-undef */
import * as Settings from '../settings/sketch';
import drawPoints from './drawPoints';
import resetCamera from './resetCamera';

const sketch2d = (p) => {
    p.setup = function() {
        p.createCanvas(Settings.CANVAS_WIDTH, Settings.CANVAS_HEIGHT);

        // p.textFont(p.fontBlack);
    }


    p.draw = function() {
        p.background(200);
        // normalMaterial();
        // resetCamera(p);
        // drawAltitudes();
        drawPoints(p, '2d');
        // eslint-disable-next-line no-undef
        const [x, y, z] = translationsPerAxis;
        p.translate(1000, 100);


        // Allow user to interact (drag and zoom)
        // p.orbitControl();
    }
};

export default sketch2d;