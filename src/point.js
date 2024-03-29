class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
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
    return new Point(this.x, this.y);
  }

  findDistanceTo(point) {
    if (!(point instanceof Point)) return NaN;
    const dx = this.x - point.x;
    const dy = this.y - point.y;
    return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
  }

  isOn(shape) {
    return shape.hasPoint(this);
  }
}

module.exports = Point;
