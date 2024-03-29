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
    it("should give true when diagonals of two rectangles are equal", function() {
      const rectangle1 = new Rectangle({ x: 1, y: 2 }, { x: 4, y: 7 });
      const rectangle2 = new Rectangle({ x: 1, y: 2 }, { x: 4, y: 7 });
      assert.isTrue(rectangle1.isEqualTo(rectangle2));
    });

    it("should give true when diagonals of two rectangles diagonals are not equal", function() {
      const rectangle1 = new Rectangle({ x: 1, y: 2 }, { x: 4, y: 7 });
      const rectangle2 = new Rectangle({ x: 1, y: 4 }, { x: 4, y: 3 });
      assert.isFalse(rectangle1.isEqualTo(rectangle2));
    });

    it("should give false when diagonals of two rectangles  instances are not equal", function() {
      const rectangle1 = new Rectangle({ x: 1, y: 2 }, { x: 4, y: 7 });
      const rectangle2 = { diagonal: new Line({ x: 1, y: 2 }, { x: 4, y: 7 }) };
      assert.isFalse(rectangle1.isEqualTo(rectangle2));
    });

    it("should give true when another diagonal of rectangle is given", function() {
      const rectangle1 = new Rectangle({ x: 1, y: 2 }, { x: 4, y: 7 });
      const rectangle2 = new Rectangle({ x: 4, y: 2 }, { x: 1, y: 7 });
      assert.isTrue(rectangle1.isEqualTo(rectangle2));
    });
  });

  describe("area", function() {
    it("should give  zero when both points of diagonal of rectangle are equal", function() {
      const rectangle = new Rectangle({ x: 7, y: 4 }, { x: 7, y: 4 });
      assert.strictEqual(rectangle.area, 0);
    });

    it("should calculate area points of diagonal of rectangle are given", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 5 });
      assert.strictEqual(rectangle.area, 16);
    });
  });

  describe("perimeter", function() {
    it("should give zero when both points of diagonal of rectangle are equal", function() {
      const rectangle = new Rectangle({ x: 3, y: 4 }, { x: 3, y: 4 });
      assert.strictEqual(rectangle.perimeter, 0);
    });

    it("should calculate perimeter when points of diagonal of rectangle are given", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 4, y: 4 });
      assert.strictEqual(rectangle.perimeter, 12);
    });
  });

  describe("hasPoint", function() {
    it("should return true when point is present on the ends of diagonal of the rectangle", function() {
      const rectangle = new Rectangle({ x: 1, y: 2 }, { x: 7, y: 4 });
      const point = new Point(1, 2);
      assert.isTrue(rectangle.hasPoint(point));
    });

    it("should return false when point is present on the sidess of the rectangle", function() {
      const rectangle = new Rectangle({ x: 1, y: 2 }, { x: 5, y: 4 });
      const point1 = new Point(3, 2);
      assert.isTrue(rectangle.hasPoint(point1));
      const point2 = new Point(5, 3);
      assert.isTrue(rectangle.hasPoint(point2));
    });

    it("should return true when point is not present on the sides of the rectangle", function() {
      const rectangle = new Rectangle({ x: 3, y: 2 }, { x: 7, y: 4 });
      const point = new Point(5, 5);
      assert.isFalse(rectangle.hasPoint(point));
    });

    it("should return true when point is present on the diagonal ,but not in ends of the rectangle", function() {
      const rectangle = new Rectangle({ x: 2, y: 1 }, { x: 6, y: 3 });
      const point = new Point(4, 2);
      assert.isFalse(rectangle.hasPoint(point));
    });
  });

  describe("covers", function() {
    it("should return false when point is on ends of the diagonal", function() {
      const rectangle = new Rectangle({ x: 3, y: 2 }, { x: 7, y: 4 });
      const point1 = new Point(3, 2);
      assert.isFalse(rectangle.covers(point1));
    });

    it("should return false when point is on the side", function() {
      const rectangle = new Rectangle({ x: 3, y: 2 }, { x: 7, y: 4 });
      const point1 = new Point(5, 2);
      assert.isFalse(rectangle.covers(point1));
    });

    it("should return true when point is inside the rectangle", function() {
      const rectangle = new Rectangle({ x: 3, y: 2 }, { x: 7, y: 4 });
      const point1 = new Point(5, 3);
      assert.isTrue(rectangle.covers(point1));
    });

    it("should return false when point is outside the rectangle", function() {
      const rectangle = new Rectangle({ x: 3, y: 2 }, { x: 7, y: 4 });
      const point1 = new Point(8, 5);
      assert.isFalse(rectangle.covers(point1));
    });

    it("should return true when point is on the diagonal ,but not on ends", function() {
      const rectangle = new Rectangle({ x: 3, y: 2 }, { x: 7, y: 4 });
      const point1 = new Point(5, 3);
      assert.isTrue(rectangle.covers(point1));
    });

    it("should return false when given point is not an instance of Point", function() {
      const rectangle = new Rectangle({ x: 3, y: 2 }, { x: 7, y: 7 });
      const point1 = { x: 4, y: 5 };
      assert.isFalse(rectangle.covers(point1));
    });
  });
});
