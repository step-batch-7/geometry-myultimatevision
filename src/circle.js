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
    if (!(circle instanceof Circle)) return false;
    const isradiiOfCirclesEqual = this.radius == circle.radius;
    const iscentersOfCirclesEqual = this.center.isEqualTo(circle.center);
    return isradiiOfCirclesEqual && iscentersOfCirclesEqual;
  }

  get area() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  get perimeter() {
    return 2 * Math.PI * this.radius;
  }

  hasPoint(point) {
    const distanceBetweenPointAndCenter = this.center.findDistanceTo(point);
    return distanceBetweenPointAndCenter == this.radius;
  }

  covers(point) {
    const distanceBetweenPointAndCenter = this.center.findDistanceTo(point);
    return distanceBetweenPointAndCenter < this.radius;
  }
}

module.exports = Circle;
