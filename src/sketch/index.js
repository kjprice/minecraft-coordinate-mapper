/* eslint-disable no-undef */
import sketch3d from './sketch3d';
import sketch2d from './sketch2d';


window.p5_3d = new p5(sketch3d, '3dp5');
window.p5_2d = new p5(sketch2d, '2dp5');

// window.p5_3d.canvas.style.display='none';
document.getElementById('3dp5').style.display='none';