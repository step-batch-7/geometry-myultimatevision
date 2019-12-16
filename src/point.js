class Point {
  constructor(point) {
    this.x = point.x;
    this.y = point.y;
  }

  toString() {
    return `[Point @(${this.x},${this.y})]`;
  }

  visit(visitOperation) {
    return visitOperation(this.x, this.y);
  }

  isEqualTo(other) {
    if (!(other instanceof Point)) return false;
    return this.x == other.x && this.y == other.y;
  }

  clone() {
    return new Point({ x: this.x, y: this.y });
  }
}

module.exports = Point;
