const assert = require("assert");
const Line = require("../src/smallLine");

describe("toString", function() {
  it("should give a line when line ends are given", function() {
    const line1 = new Line([1, 2], [6, 2]);
    const actual = line1.toString();
    const expected = "Line { x1: 1, y1: 2, x2: 6, y2: 2 }";
    assert.strictEqual(actual, expected);
  });
});

describe("isEqualTo", function() {
  it("should give a line when line ends are given", function() {
    const line1 = new Line([1, 2], [6, 2]);
    const actual = line1.isequalTo(line1.x1);
    const expected = true;
    assert.deepStrictEqual(actual, expected);
  });
});
