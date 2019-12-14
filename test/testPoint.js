const Point = require("../src/point");
const assert = require("chai").assert;

describe("point", function() {
  describe("toString", function() {
    it("should return string representation of point when coordinates are given", function() {
      const point = new Point({ x: 1, y: 4 });
      assert.strictEqual(point.toString(), "[Point @(1,4)]");
    });
  });
});
