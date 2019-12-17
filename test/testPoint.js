const Point = require("../src/point");
const Line = require("../src/line");
const Circle = require("../src/circle");
const assert = require("chai").assert;

describe("point", function() {
  describe("toString", function() {
    it("should generate a string representation of point when coordinates are given", function() {
      const point = new Point(1, 4);
      assert.strictEqual(point.toString(), "[Point @(1,4)]");
    });
  });

  describe("visit", function() {
    it("should perform addition when it is called with addition", function() {
      const point = new Point(1, 4);
      const actual = point.visit((x, y) => x + y);
      assert.strictEqual(actual, 5);
    });

    it("should perform multiplication when it is called with multiplication", function() {
      const point = new Point(2, 4);
      const actual = point.visit((x, y) => x * y);
      assert.strictEqual(actual, 8);
    });
  });

  describe("isEqualTo", function() {
    it("should return true when both coordinates of two points and instances of point class are equal ", function() {
      const point1 = new Point(3, 7);
      const point2 = new Point(3, 7);
      assert.isTrue(point1.isEqualTo(point2));
    });

    it("should return true when x-coordinates of two points are not equal  ", function() {
      const point1 = new Point(3, 7);
      const point2 = new Point(6, 7);
      assert.isFalse(point1.isEqualTo(point2));
    });

    it("should return true when y-coordinates of two points are  not equal", function() {
      const point1 = new Point(3, 5);
      const point2 = new Point(3, 7);
      assert.isFalse(point1.isEqualTo(point2));
    });

    it("should return true when both coordinates of two points are  not equal", function() {
      const point1 = new Point(3, 7);
      const point2 = new Point(5, 4);
      assert.isFalse(point1.isEqualTo(point2));
    });

    it("should return true when instances of two points are  not equal", function() {
      const point1 = new Point(3, 7);
      const point2 = { x: 3, y: 7 };
      assert.isFalse(point1.isEqualTo(point2));
    });
  });

  describe("clone", function() {
    it("should clone the point for given point", function() {
      const point = new Point(3, 5);
      const actual = point.clone();
      assert.ok(actual instanceof Point);
      assert.deepStrictEqual(actual, point);
    });
  });

  describe("findDistanceTo", function() {
    it("should return 0 if both points are same", function() {
      const point1 = new Point(2, 5);
      const point2 = new Point(2, 5);
      const actual = point1.findDistanceTo(point2);
      assert.strictEqual(actual, 0);
    });

    it("should return distance if both points are at different coordinates", function() {
      const point1 = new Point(2, 4);
      const point2 = new Point(6, 7);
      const actual = point1.findDistanceTo(point2);
      assert.strictEqual(actual, 5);
    });

    it("should return nan when given point not an instance of Point", function() {
      const point1 = new Point(2, 4);
      const point2 = { x: 2, y: 4 };
      const actual = point1.findDistanceTo(point2);
      assert.isNaN(actual);
    });
  });

  describe("isOn", function() {
    it("should return true when point is present on the ends", function() {
      const point1 = new Point(3, 5);
      const point2 = new Point(7, 8);
      const line = new Line({ x: 3, y: 5 }, { x: 7, y: 8 });
      assert.isTrue(point1.isOn(line));
      assert.isTrue(point2.isOn(line));
    });

    it("should return true when point is present on the line", function() {
      const point = new Point(5, 6.5);
      const line = new Line({ x: 3, y: 5 }, { x: 7, y: 8 });
      assert.isTrue(point.isOn(line));
    });

    it("should return true when point is not present on the line", function() {
      const point = new Point(5, 6);
      const line = new Line({ x: 2, y: 4 }, { x: 9, y: 8 });
      assert.isFalse(point.isOn(line));
    });

    it("should give true when point is present on the circle", function() {
      const point = new Point(7, 2);
      const circle = new Circle({ x: 2, y: 2 }, 5);
      assert.isTrue(point.isOn(circle));
    });

    it("should give true when point is not present on the circle", function() {
      const point = new Point(7, 5);
      const circle = new Circle({ x: 2, y: 2 }, 5);
      assert.isFalse(point.isOn(circle));
    });
  });
});
