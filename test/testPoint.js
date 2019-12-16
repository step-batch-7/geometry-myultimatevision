const Point = require("../src/point");
const assert = require("chai").assert;

describe("point", function() {
  describe("toString", function() {
    it("should generate a string representation of point when coordinates are given", function() {
      const point = new Point({ x: 1, y: 4 });
      assert.strictEqual(point.toString(), "[Point @(1,4)]");
    });
  });

  describe("visit", function() {
    it("should perform addition when it is called with addition", function() {
      const point = new Point({ x: 1, y: 4 });
      const actual = point.visit((x, y) => x + y);
      assert.strictEqual(actual, 5);
    });

    it("should perform multiplication when it is called with multiplication", function() {
      const point = new Point({ x: 2, y: 4 });
      const actual = point.visit((x, y) => x * y);
      assert.strictEqual(actual, 8);
    });
  });

  describe("isEqualTo", function() {
    it("should return true when both coordinates of two points and instances of point class are equal ", function() {
      const point1 = new Point({ x: 3, y: 7 });
      const point2 = new Point({ x: 3, y: 7 });
      assert.isTrue(point1.isEqualTo(point2));
    });

    it("should return true when x-coordinates of two points are not equal  ", function() {
      const point1 = new Point({ x: 3, y: 7 });
      const point2 = new Point({ x: 6, y: 7 });
      assert.isFalse(point1.isEqualTo(point2));
    });

    it("should return true when y-coordinates of two points are  not equal", function() {
      const point1 = new Point({ x: 3, y: 5 });
      const point2 = new Point({ x: 3, y: 7 });
      assert.isFalse(point1.isEqualTo(point2));
    });

    it("should return true when both coordinates of two points are  not equal", function() {
      const point1 = new Point({ x: 3, y: 7 });
      const point2 = new Point({ x: 5, y: 4 });
      assert.isFalse(point1.isEqualTo(point2));
    });

    it("should return true when instances of two points are  not equal", function() {
      const point1 = new Point({ x: 3, y: 7 });
      const point2 = { x: 3, y: 7 };
      assert.isFalse(point1.isEqualTo(point2));
    });
  });

  describe("clone", function() {
    it("should clone the point for given point", function() {
      const point = new Point({ x: 3, y: 5 });
      const actual = point.clone();
      assert.ok(actual instanceof Point);
      assert.deepStrictEqual(actual, point);
    });
  });
});
