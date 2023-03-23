/* eslint-disable no-undef */
// import { translationsPerAxis } from '../settings/sketch';

export default function resetCamera(p) {
    // eslint-disable-next-line no-undef
    const [x, y, z] = translationsPerAxis;

    // eslint-disable-next-line no-undef
    p.rotateX(ROTATE[0]);
    p.rotateY(ROTATE[1]);
    p.rotateZ(ROTATE[2]);
    p.translate(x, y, z);
}