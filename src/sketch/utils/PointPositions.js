import scaleForRange from "../../utils/scaleForRange";

import {
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
  BOX_HEIGHT,
  CANVAS_BORDER_BUFFER,
} from "../../settings/sketch";

function calculateMaxValues(coordinates) {
  let minX = coordinates[0].x;
  let minY = coordinates[0].y;
  let minZ = coordinates[0].z;
  let maxX = coordinates[0].x;
  let maxY = coordinates[0].y;
  let maxZ = coordinates[0].z;

  coordinates.slice(1).forEach((coordinate) => {
    const { x, y, z } = coordinate;
    if (x < minX) {
      minX = x;
    }
    if (x > maxX) {
      maxX = x;
    }
    if (y < minY) {
      minY = y;
    }
    if (y > maxY) {
      maxY = y;
    }
    if (z < minZ) {
      minZ = z;
    }
    if (z > maxZ) {
      maxZ = z;
    }
  });

  return {
    minX,
    maxX,
    minY,
    maxY,
    minZ,
    maxZ,
  };
}

export default class PointPositions {
  constructor(coordinates, p, iconSettingsByText) {
    this.iconSettingsByText = iconSettingsByText;
    const { minX, maxX, minY, maxY, minZ, maxZ } =
      calculateMaxValues(coordinates);
    this.coordinates = coordinates;
    this.p = p;
    this.minX = minX;
    this.maxX = maxX;
    this.minY = minY;
    this.maxY = maxY;
    this.minZ = minZ;
    this.maxZ = maxZ;
    this.allPoints = this.pointPositions;
    // console.log(p.mouseX, p.mouseY);
  }

  getX(x) {
    const canvasLeft = CANVAS_BORDER_BUFFER;
    const canvasRight = CANVAS_WIDTH - CANVAS_BORDER_BUFFER * 2;
    return scaleForRange(x, this.minX, this.maxX, canvasLeft, canvasRight);
  }

  getZ(z) {
    const canvasTop = CANVAS_BORDER_BUFFER;
    const canvasBottom = CANVAS_HEIGHT - CANVAS_BORDER_BUFFER;
    return scaleForRange(z, this.minZ, this.maxZ, canvasTop, canvasBottom);
  }
  get mouseX() {
    return this.p.mouseX;
  }
  get mouseY() {
    return this.p.mouseY;
  }

  isHovered(x, z) {
    if (this.mouseX < x) {
      return false;
    }
    if (this.mouseX > x + BOX_HEIGHT) {
      return false;
    }
    if (this.mouseY < z) {
      return false;
    }
    if (this.mouseY > z + BOX_HEIGHT) {
      return false;
    }

    return true;
  }

  get pointPositions() {
    console.log("get point positions");
    return this.coordinates.map((coordinate) => {
      const { x, y, z, isStarting, isEnding, averageZ, name } = coordinate;
      const canvasPositionX = this.getX(x);
      const canvasPositionZ = this.getZ(z);
      const iconSettings = this.getSettingsFromPointText(name);
      return {
        x: canvasPositionX,
        y,
        z: canvasPositionZ,
        coordinate,
        name,
        iconSettings,
        // isHovered:
      };
    });
  }

  drawPointDescriptionInfo(coordinate) {
    const { x, y, z, name } = coordinate;
    this.p.fill("black");
    this.p.textSize(20);
    const pointDescription = `${name} \t ${x} \t ${y} \t ${z}`;
    this.p.text(pointDescription, 20, 20);
  }

  getSettingsFromPointText(text) {
    for (const iconTextKey of Object.keys(this.iconSettingsByText)) {
      if (text.toLowerCase().includes(iconTextKey)) {
        return this.iconSettingsByText[iconTextKey];
      }
    }

    return { color: "blue", shape: "square" };
  }

  drawTriangle(x, y) {
    const triangleSideLength = BOX_HEIGHT;
    const diff = (triangleSideLength /2)
    const leftPoint = [x - diff, y + diff];
    const topPoint = [x, y - diff];
    const rightPoint = [x + diff, y + diff];
    const triangleDimensions = [...leftPoint, ...topPoint, ...rightPoint]

    this.p.triangle(...triangleDimensions);
  }

  draw2dPoints() {
    this.allPoints
      .forEach(({ x, y, z, coordinate, iconSettings }) => {
        const { color, shape } = iconSettings;
        if (this.isHovered(x, z)) {
          this.drawPointDescriptionInfo(coordinate);
          this.p.fill("red");
        } else {
          this.p.fill(color);
        }
        switch(shape) {
          case 'square':
            this.p.rect(x, z, BOX_HEIGHT, BOX_HEIGHT);
            break;
          case 'triangle':
            this.drawTriangle(x, z);
            break;
          case 'circle':
            this.p.circle(x, z, BOX_HEIGHT);
            break;
          default:
            throw new Error(`unknown shape ${shape}`);
          }
      });
  }
}
