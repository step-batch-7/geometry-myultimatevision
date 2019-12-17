const Line = require("./line");

const getSides = function(endA, endB) {
  const side1 = new Line(endA, { x: endA.x, y: endB.y });
  const side2 = new Line(endA, { x: endB.x, y: endA.y });
  const side3 = new Line(endB, { x: endA.x, y: endA.y });
  const side4 = new Line(endB, { x: endB.x, y: endB.y });
  return { side1, side2, side3, side4 };
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
    return (
      point.isEqualTo(this.diagnol.endA) && point.isEqualTo(this.diagnol.endA)
    );
  }
}

module.exports = Rectangle;
