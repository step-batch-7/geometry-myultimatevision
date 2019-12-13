const assert = require("chai").assert;
const Line = require("../src/line");

describe("Line", function() {
  describe("toString", function() {
    it("should give a line when line ends are given", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 6, y: 2 });
      const actual = line1.toString();
      const expected = "Line ((1,2),(6,2))";
      assert.strictEqual(actual, expected);
    });
  });

  describe("isEqualTo", function() {
    it("should give true when two lines are equal", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 6, y: 2 });
      const line2 = new Line({ x: 1, y: 2 }, { x: 6, y: 2 });
      assert.ok(line1.isEqualTo(line2));
    });

    it("should give false when two lines are  not equal", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 6, y: 2 });
      const line2 = new Line({ x: 1, y: 3 }, { x: 4, y: 2 });
      assert.ok(!line1.isEqualTo(line2));
    });

    it("should give false when two lines are  not instances of Same class", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 6, y: 2 });
      const actual = line1.isEqualTo({
        endA: { x: 1, y: 2 },
        endB: { x: 6, y: 2 }
      });
      assert.ok(!actual);
    });
  });

  describe("length", function() {
    it("should give 0 if both points of line are Equal", function() {
      const line1 = new Line({ x: 1, y: 1 }, { x: 1, y: 1 });
      assert.strictEqual(line1.length, 0);
    });

    it("should give length  as positive when all points of line are positive", function() {
      const line1 = new Line({ x: 1, y: 1 }, { x: 4, y: 1 });
      assert.strictEqual(line1.length, 3);
    });

    it("should give length  as positive when only one point of line is positive", function() {
      const line1 = new Line({ x: -1, y: 1 }, { x: 4, y: 1 });
      assert.strictEqual(line1.length, 5);
    });

    it("should give length  as positive when two points of line are negative", function() {
      const line1 = new Line({ x: -1, y: -1 }, { x: -4, y: -1 });
      assert.strictEqual(line1.length, 3);
    });

    it("should give length  as decimal length if it gets decimal value", function() {
      const line1 = new Line({ x: 3, y: 1 }, { x: 4, y: 2 });
      assert.approximately(line1.length, 1.4142135623730951, 1);
    });
  });

  describe("isParrellel to", function() {
    it("should give false if both end points are equal", function() {
      const line1 = new Line({ x: 3, y: 1 }, { x: 4, y: 2 });
      const line2 = new Line({ x: 3, y: 1 }, { x: 4, y: 2 });
      assert.isNotOk(line1.isParallelTo(line2));
    });

    it("should give true if both lines are parrallel to x-axis", function() {
      const line1 = new Line({ x: 0, y: 0 }, { x: 0, y: 4 });
      const line2 = new Line({ x: 4, y: 0 }, { x: 4, y: 4 });
      assert.isOk(line1.isParallelTo(line2));
    });

    it("should give true if both lines are parrallel to Y-axis", function() {
      const line1 = new Line({ x: 0, y: 0 }, { x: 4, y: 0 });
      const line2 = new Line({ x: 0, y: 4 }, { x: 4, y: 4 });
      assert.isOk(line1.isParallelTo(line2));
    });

    it("should give true if both lines are parrallel to eachOther without parellel to any axis", function() {
      const line1 = new Line({ x: 2, y: 0 }, { x: 0, y: 2 });
      const line2 = new Line({ x: 0, y: -2 }, { x: -2, y: 0 });
      assert.isOk(line1.isParallelTo(line2));
    });
  });
});
