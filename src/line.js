const Point = require("./point");

const isYOutsideTheLine = function(y1, y2, y) {
  return (y1 > y && y2 > y) || (y1 < y && y2 < y);
};

const isXOutsideTheLine = function(x1, x2, x) {
  return (x1 > x && x2 > x) || (x1 < x && x2 < x);
};

class Line {
  constructor(endA, endB) {
    this.endA = { x: endA.x, y: endA.y };
    this.endB = { x: endB.x, y: endB.y };
  }

  toString() {
    return `[Line (${this.endA.x},${this.endA.y}) to (${this.endB.x},${this.endB.y})]`;
  }

  isEqualTo(other) {
    if (!(other instanceof Line)) return false;
    const thisEndApoint = new Point(this.endA.x, this.endA.y);
    const thisEndBpoint = new Point(this.endB.x, this.endB.y);
    const otherEndApoint = new Point(other.endA.x, other.endA.y);
    const otherEndBpoint = new Point(other.endB.x, other.endB.y);
    const areEndsEqual =
      thisEndApoint.isEqualTo(otherEndApoint) &&
      thisEndBpoint.isEqualTo(otherEndBpoint);
    return areEndsEqual;
  }

  get length() {
    const dx = this.endB.x - this.endA.x;
    const dy = this.endB.y - this.endA.y;
    return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
  }

  get slope() {
    return (this.endB.y - this.endA.y) / (this.endB.x - this.endA.x);
  }

  isParallelTo(line2) {
    if (this.isEqualTo(line2)) return false;
    const line = new Line(this.endA, line2.endA);
    if (Math.abs(this.slope) == Infinity)
      return Math.abs(this.slope) != Math.abs(line.slope);
    return this.slope == line2.slope && this.slope != line.slope;
  }

  findX(y) {
    if (isYOutsideTheLine(this.endA.y, this.endB.y, y)) return NaN;
    if (this.endA.x == this.endB.x || this.endA.y == y) return this.endA.x;
    if (this.endB.y == y) return this.endB.x;
    const x = (y - this.endA.y) / this.slope + this.endA.x;
    return x;
  }

  findY(x) {
    if (isXOutsideTheLine(this.endA.x, this.endB.x, x)) return NaN;
    if (this.endA.y == this.endB.y || this.endA.x == x) return this.endA.y;
    if (this.endB.x == x) return this.endB.y;
    const y = this.slope * (x - this.endA.x) + this.endA.y;
    return y;
  }

  split() {
    const midPoint = {
      x: (this.endA.x + this.endB.x) / 2,
      y: (this.endA.y + this.endB.y) / 2
    };
    return [new Line(this.endA, midPoint), new Line(midPoint, this.endB)];
  }

  hasPoint(point) {
    if (!(point instanceof Point)) return false;
    return point.x == this.findX(point.y) || point.y == this.findY(point.x);
  }
}

module.exports = Line;
