class point {
  constructor(point) {
    this.x = point.x;
    this.y = point.y;
  }
  toString() {
    return `[Point @(${this.x},${this.y})]`;
  }
}

module.exports = point;
