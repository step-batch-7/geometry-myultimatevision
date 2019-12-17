const Line = require("./line");

class Rectangle {
  constructor(endA, endB) {
    this.diagnol = new Line(endA, endB);
  }

  toString() {
    const { endA, endB } = this.diagnol;
    return `[Rectangle (${endA.x},${endA.y}) to (${endB.x},${endB.y})]`;
  }
}

module.exports = Rectangle;
