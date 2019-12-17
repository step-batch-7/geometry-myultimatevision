const Point = require("./point");

class Circle {
  constructor(center, radius) {
    this.center = new Point(center.x, center.y);
    this.radius = radius;
  }

  toString() {
    return `[Circle @(${this.center.x},${this.center.y}) radius ${this.radius}]`;
  }

  isEqualTo(circle) {
    const isradiiOfCirclesEqual = this.radius == circle.radius;
    const iscentersOfCirclesEqual = this.center.isEqualTo(circle.center);
    return isradiiOfCirclesEqual && iscentersOfCirclesEqual;
  }
}

module.exports = Circle;
