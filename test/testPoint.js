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
});
