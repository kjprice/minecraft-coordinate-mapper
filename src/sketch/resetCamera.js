import { translationsPerAxis } from '../settings/sketch';

export default function resetCamera() {
    const [x, y, z] = translationsPerAxis;

    // eslint-disable-next-line no-undef
    translate(x, y, z);
}