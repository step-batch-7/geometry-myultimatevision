const assert = require("chai").assert;
const Rectangle = require("../src/rectangle");
const Line = require("../src/line");
const Point = require("../src/point");

describe("Rectangle", function() {
  describe("toString", function() {
    it("should creates a string representation of rectangle", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 5 });
      const expected = "[Rectangle (1,1) to (5,5)]";
      assert.deepStrictEqual(rectangle.toString(), expected);
    });
  });

  describe("isEqualTo", function() {
    it("should give true when diagnols of two rectangles are equal", function() {
      const rectangle1 = new Rectangle({ x: 1, y: 2 }, { x: 4, y: 7 });
      const rectangle2 = new Rectangle({ x: 1, y: 2 }, { x: 4, y: 7 });
      assert.isTrue(rectangle1.isEqualTo(rectangle2));
    });

    it("should give true when diagnols of two rectangles diagnols are not equal", function() {
      const rectangle1 = new Rectangle({ x: 1, y: 2 }, { x: 4, y: 7 });
      const rectangle2 = new Rectangle({ x: 1, y: 4 }, { x: 4, y: 3 });
      assert.isFalse(rectangle1.isEqualTo(rectangle2));
    });

    it("should give false when diagnols of two rectangles  instances are not equal", function() {
      const rectangle1 = new Rectangle({ x: 1, y: 2 }, { x: 4, y: 7 });
      const rectangle2 = { diagnol: new Line({ x: 1, y: 2 }, { x: 4, y: 7 }) };
      assert.isFalse(rectangle1.isEqualTo(rectangle2));
    });
  });

  describe("area", function() {
    it("should give  zero when both points of diagnol of rectangle are equal", function() {
      const rectangle = new Rectangle({ x: 7, y: 4 }, { x: 7, y: 4 });
      assert.strictEqual(rectangle.area, 0);
    });

    it("should calculate area points of diagnol of rectangle are given", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 5 });
      assert.strictEqual(rectangle.area, 16);
    });
  });

  describe("perimeter", function() {
    it("should give zero when both points of diagnol of rectangle are equal", function() {
      const rectangle = new Rectangle({ x: 3, y: 4 }, { x: 3, y: 4 });
      assert.strictEqual(rectangle.perimeter, 0);
    });

    it("should calculate perimeter when points of diagnol of rectangle are given", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 4, y: 4 });
      assert.strictEqual(rectangle.perimeter, 12);
    });
  });

  describe("hasPoint", function() {
    it("should return true when point is present on the ends of diagnol of the rectangle", function() {
      const rectangle = new Rectangle({ x: 1, y: 2 }, { x: 7, y: 4 });
      const point = new Point(1, 2);
      assert.isTrue(rectangle.hasPoint(point));
    });

    it("should return false when point is present on the side of the rectangle", function() {
      const rectangle = new Rectangle({ x: 1, y: 2 }, { x: 5, y: 4 });
      const point = new Point(3, 2);
      assert.isTrue(rectangle.hasPoint(point));
    });

    it("should return true when point is not present on the side of the rectangle", function() {
      const rectangle = new Rectangle({ x: 3, y: 2 }, { x: 7, y: 4 });
      const point = new Point(5, 5);
      assert.isFalse(rectangle.hasPoint(point));
    });

    it("should return true when point is present on the diagnol ,but not in ends of the rectangle", function() {
      const rectangle = new Rectangle({ x: 2, y: 1 }, { x: 6, y: 3 });
      const point = new Point(4, 2);
      assert.isFalse(rectangle.hasPoint(point));
    });
  });
});
