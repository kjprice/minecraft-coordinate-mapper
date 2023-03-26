import * as Settings from '../settings/sketch';
import { getCoordinates, getPointPositions } from './utils/stateMemoized';


const showGrid = (p, pointPositions) => {
  const  { CANVAS_WIDTH, CANVAS_HEIGHT, GRID_COLOR } = Settings;
  const { minX, maxX, minZ, maxZ} = pointPositions;
  const gridCount = {
    horizontal: 5,
    vertical: 8
  };

  const pointXSpace = parseInt((maxX - minX) / (gridCount.vertical - 1));
  for (let i = 0; i < gridCount.vertical; i += 1) {
    const xPointPosition = pointXSpace * i + minX;
    const x = pointPositions.getX(xPointPosition);

    p.stroke(GRID_COLOR);
    p.line(x, 0, x, CANVAS_HEIGHT);
    p.fill('white');
    const coordText = xPointPosition;
    p.textSize(14);
    p.text(coordText, x+5, 15);
  }

  const pointYSpace = parseInt((maxZ - minZ) / (gridCount.horizontal - 1));
  for (let i = 0; i < gridCount.horizontal; i += 1) {
    const yPointPosition = pointYSpace * i + minZ;
    const y = pointPositions.getZ(yPointPosition);

    p.stroke(GRID_COLOR);
    p.line(0, y, CANVAS_WIDTH, y);
    p.fill('white');
    const coordText = yPointPosition;
    p.textSize(14);
    p.text(coordText, 5, y + 15);
  }
}


const sketch2d = (p) => {
    p.setup = function() {
        p.createCanvas(Settings.CANVAS_WIDTH, Settings.CANVAS_HEIGHT);
    }


    p.draw = function() {
        const { BACKGROUND_COLOR } = Settings;
        p.background(BACKGROUND_COLOR);
        const coordinates = getCoordinates();
      
        window.coordinates = coordinates;
        if (!coordinates) {
          return;
        }

        const pointPositions = getPointPositions(coordinates, p);
        window.pointPositions = pointPositions;

        showGrid(p, pointPositions);
        pointPositions.draw2dPoints();

          
        pointPositions.draw2dPoints();
        p.translate(1000, 100);
    }
};

export default sketch2d;