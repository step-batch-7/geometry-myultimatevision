const Line = require("./line");

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
    const side1 = new Line(endA, { x: endA.x, y: endB.y });
    const side2 = new Line(endA, { x: endB.x, y: endA.y });
    return side1.length * side2.length;
  }
}

module.exports = Rectangle;
