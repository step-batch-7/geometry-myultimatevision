const areEndPointsEqual = function(line1End, line2End) {
  return line1End.x == line2End.x && line1End.y == line2End.y;
};

const slopeOf = function(line) {
  const slope = (line.endB.y - line.endA.y) / (line.endB.x - line.endA.x);
  return slope;
};

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
    return `Line ((${this.endA.x},${this.endA.y}),(${this.endB.x},${this.endB.y}))`;
  }

  isEqualTo(other) {
    if (!(other instanceof Line)) return false;
    const areEndsEqual =
      areEndPointsEqual(this.endA, other.endA) &&
      areEndPointsEqual(this.endB, other.endB);
    return areEndsEqual;
  }

  get length() {
    const differenceOfXInEnds = this.endB.x - this.endA.x;
    const differenceOfYInEnds = this.endB.y - this.endA.y;
    const length = Math.sqrt(
      Math.pow(differenceOfXInEnds, 2) + Math.pow(differenceOfYInEnds, 2)
    );
    return length;
  }

  get slope() {
    return (this.endB.y - this.endA.y) / (this.endB.x - this.endA.x);
  }

  isParallelTo(line2) {
    if (this.isEqualTo(line2)) return false;
    return this.slope == slopeOf(line2);
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
    const y = this.slope * (x - this.endA.x) + this.endA.x;
    return y;
  }
}

module.exports = Line;
