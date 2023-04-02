// https://programmingdesignsystems.com/shape/custom-shapes/index.html
const house = () => {
    noStroke();
    fill(40);
    translate((width/2) - (w/2), height/2);
  
    beginShape();
    vertex(0, 0);
    vertex(0, h);
    vertex(w, h);
    vertex(w, 0);
    vertex(w/2, -h);
    endShape();
}

export default house;