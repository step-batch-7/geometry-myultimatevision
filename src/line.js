const areEndPointsEqual = function(line1End, line2End) {
  return line1End.x == line2End.x && line1End.y == line2End.y;
};

const square = function(number) {
  return number * number;
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
      square(differenceOfXInEnds) + square(differenceOfYInEnds)
    );
    return length;
  }

  isParallelTo(line2) {
    if (this.isEqualTo(line2)) return true;
  }
}

module.exports = Line;
