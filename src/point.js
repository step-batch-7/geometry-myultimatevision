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

  findDistanceTo(point) {
    const dx = this.x - point.x;
    const dy = this.y - point.y;
    return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
  }
}

module.exports = Point;
