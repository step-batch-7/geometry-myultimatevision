const assert = require("assert");
const Circle = require("../src/circle");

describe("Circle", function() {
  describe("toString", function() {
    it("should give string representation of the circle", function() {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const actual = circle.toString();
      const expected = "[Circle @(0,0) radius 5]";
      assert.strictEqual(actual, expected);
    });
  });
});
