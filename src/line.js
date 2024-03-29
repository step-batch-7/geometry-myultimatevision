const Point = require("./point");

const isNotInRange = function(range, number) {
  const max = Math.max(...range);
  const min = Math.min(...range);
  return number < min || number > max;
};

const getCoordinate = function(end1, end2, ratio) {
  return (1 - ratio) * end1 + end2 * ratio;
};

class Line {
  constructor(endA, endB) {
    this.endA = new Point(endA.x, endA.y);
    this.endB = new Point(endB.x, endB.y);
  }

  toString() {
    return `[Line (${this.endA.x},${this.endA.y}) to (${this.endB.x},${this.endB.y})]`;
  }

  isEqualTo(other) {
    if (!(other instanceof Line)) return false;
    const line1 = new Line(this.endA, this.endB);
    const line2 = new Line(other.endA, other.endB);
    const areEndsEqualInOrder =
      line1.endA.isEqualTo(line2.endA) && line1.endB.isEqualTo(line2.endB);
    const areEndsEqualInReverseOrder =
      line1.endB.isEqualTo(line2.endA) && line1.endA.isEqualTo(line2.endB);
    return areEndsEqualInOrder || areEndsEqualInReverseOrder;
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
    if (Math.abs(this.slope) == Infinity && Math.abs(line2.slope) == Infinity)
      return Math.abs(this.slope) != Math.abs(line.slope);
    return this.slope == line2.slope && this.slope != line.slope;
  }

  findX(y) {
    if (isNotInRange([this.endA.y, this.endB.y], y)) return NaN;
    if (this.endA.x == this.endB.x || this.endA.y == y) return this.endA.x;
    if (this.endB.y == y) return this.endB.x;
    const x = (y - this.endA.y) / this.slope + this.endA.x;
    return x;
  }

  findY(x) {
    if (isNotInRange([this.endA.x, this.endB.x], x)) return NaN;
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

  findPointFromStart(distance) {
    const ratio = distance / this.length;
    if (isNotInRange([0, 1], ratio)) return null;
    const x = getCoordinate(this.endA.x, this.endB.x, ratio);
    const y = getCoordinate(this.endA.y, this.endB.y, ratio);
    return new Point(x, y);
  }

  findPointFromEnd(distance) {
    return this.findPointFromStart(this.length - distance);
  }
}

module.exports = Line;
