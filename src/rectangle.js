const Line = require("./line");
const Point = require("./point");

const getSides = function(endA, endB) {
  const side1 = new Line(endA, { x: endA.x, y: endB.y });
  const side2 = new Line(endA, { x: endB.x, y: endA.y });
  const side3 = new Line(endB, { x: endA.x, y: endB.y });
  const side4 = new Line(endB, { x: endB.x, y: endA.y });
  return { side1, side2, side3, side4 };
};

const isInRange = function(range, number) {
  const max = Math.max(...range);
  const min = Math.min(...range);
  return number > min && number < max;
};

class Rectangle {
  constructor(endA, endB) {
    this.diagnol = new Line(endA, endB);
  }

  toString() {
    const { endA, endB } = this.diagnol;
    return `[Rectangle (${endA.x},${endA.y}) to (${endB.x},${endB.y})]`;
  }

  isEqualTo(rectangle) {
    if (!(rectangle instanceof Rectangle)) return false;
    return this.diagnol.isEqualTo(rectangle.diagnol);
  }

  get area() {
    const { endA, endB } = this.diagnol;
    const { side1, side2 } = getSides(endA, endB);
    return side1.length * side2.length;
  }

  get perimeter() {
    const { endA, endB } = this.diagnol;
    const { side1, side2 } = getSides(endA, endB);
    return 2 * (side1.length + side2.length);
  }

  hasPoint(point) {
    const { endA, endB } = this.diagnol;
    const sides = getSides(endA, endB);
    const keys = Object.keys(sides);
    const thisHasPoint = keys.some(key => sides[key].hasPoint(point));
    return thisHasPoint;
  }

  covers(point) {
    const { endA, endB } = this.diagnol;
    if (!(point instanceof Point)) return false;
    return (
      isInRange([endA.x, endB.x], point.x) &&
      isInRange([endA.y, endB.y], point.y)
    );
  }
}

module.exports = Rectangle;
