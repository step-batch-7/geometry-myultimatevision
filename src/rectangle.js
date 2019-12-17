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
    const length = Math.abs(endA.x - endB.x);
    const breadth = Math.abs(endA.y - endB.y);
    return length * breadth;
  }

  get perimeter() {
    const { endA, endB } = this.diagnol;
    const length = Math.abs(endA.x - endB.x);
    const breadth = Math.abs(endA.y - endB.y);
    return 2 * (length + breadth);
  }
}

module.exports = Rectangle;
