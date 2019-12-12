class Line {
  constructor(start, end) {
    this.x1 = start[0];
    this.y1 = start[1];
    this.x2 = end[0];
    this.y2 = end[1];
  }

  toString() {
    return "Line { x1: 1, y1: 2, x2: 6, y2: 2 }";
  }
}

module.exports = Line;
