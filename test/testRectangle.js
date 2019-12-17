const assert = require("chai").assert;
const Rectangle = require("../src/rectangle");

describe("Rectangle", function() {
  describe("toString", function() {
    it("should creates a string representation of rectangle", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 5 });
      const expected = "[Rectangle (1,1) to (5,5)]";
      assert.deepStrictEqual(rectangle.toString(), expected);
    });
  });
});
