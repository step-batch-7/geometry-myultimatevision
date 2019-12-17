const assert = require("chai").assert;
const Circle = require("../src/circle");
const Point = require("../src/point");

describe("Circle", function() {
  describe("toString", function() {
    it("should give string representation of the circle", function() {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const actual = circle.toString();
      const expected = "[Circle @(0,0) radius 5]";
      assert.strictEqual(actual, expected);
    });
  });

  describe("isEqualTo ", function() {
    it("should validate two circles when radius and center is equal", function() {
      const circle1 = new Circle({ x: 0, y: 0 }, 5);
      const circle2 = new Circle({ x: 0, y: 0 }, 5);
      assert.isTrue(circle1.isEqualTo(circle2));
    });

    it("should invalidate two circles when radii is equal and center is not equal", function() {
      const circle1 = new Circle({ x: 0, y: 0 }, 5);
      const circle2 = new Circle({ x: 0, y: 5 }, 5);
      assert.isFalse(circle1.isEqualTo(circle2));
    });

    it("should invalidate two circles when radii are not equal ,but center is equal", function() {
      const circle1 = new Circle({ x: 0, y: 0 }, 6);
      const circle2 = new Circle({ x: 0, y: 0 }, 4);
      assert.isFalse(circle1.isEqualTo(circle2));
    });

    it("should invalidate two circles when both radii  and centers not equal", function() {
      const circle1 = new Circle({ x: 0, y: 0 }, 6);
      const circle2 = new Circle({ x: 0, y: 0 }, 4);
      assert.isFalse(circle1.isEqualTo(circle2));
    });

    it("should invalidate when circle is not instanceOfCicle ", function() {
      const circle1 = new Circle({ x: 0, y: 0 }, 5);
      const circle2 = { center: new Point(0, 0), radius: 5 };
      assert.isFalse(circle1.isEqualTo(circle2));
    });
  });

  describe("area", function() {
    it("should give 0 if radius is 0", function() {
      const circle = new Circle({ x: 2, y: 0 }, 0);
      assert.strictEqual(circle.area, 0);
    });

    it("should give area if radius is positive ", function() {
      const circle = new Circle({ x: 2, y: 0 }, 7);
      assert.approximately(circle.area, 154, 1);
    });
  });
});
