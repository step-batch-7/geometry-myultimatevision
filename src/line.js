const areEndPointsEqual = function(line1End, line2End) {
  return line1End.x == line2End.x && line1End.y == line2End.y;
};

class Line {
  constructor(endA, endB) {
    this.endA = endA;
    this.endB = endB;

    // this.endA = {x:endA.x,y:endA.y};
    // this.endB = {x:endB.x,y:endB.y};
  }

  toString() {
    return `Line first end point is (${this.endA.x},${this.endA.y}) and another end point is (${this.endB.x},${this.endB.y})`;
  }

  isEqualTo(line2) {
    const isEndsEqual =
      areEndPointsEqual(this.endA, line2.endA) &&
      areEndPointsEqual(this.endB, line2.endB);
    return isEndsEqual;
  }
}

module.exports = Line;
