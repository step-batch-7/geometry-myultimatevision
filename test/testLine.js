const assert = require("chai").assert;
const Line = require("../src/line");
const Point = require("../src/point");

describe("Line", function() {
  describe("toString", function() {
    it("should give a line when line ends are given", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 6, y: 2 });
      const actual = line1.toString();
      const expected = "[Line (1,2) to (6,2)]";
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

    it("should give true if both lines are parrallel to Y-axis and slope is in negative", function() {
      const line1 = new Line({ x: 0, y: 0 }, { x: 0, y: 4 });
      const line2 = new Line({ x: 1, y: 1 }, { x: 1, y: -3 });
      assert.isOk(line1.isParallelTo(line2));
    });

    it("should give true if both lines are parallel and is in opposite quadrants", function() {
      const line1 = new Line({ x: 2, y: 0 }, { x: 0, y: 2 });
      const line2 = new Line({ x: -2, y: 0 }, { x: 0, y: -2 });
      assert.isOk(line1.isParallelTo(line2));
    });
  });

  describe("slope", function() {
    it("should return 0 if line is parallel to x-axis ", function() {
      const line = new Line({ x: 2, y: 2 }, { x: 0, y: 2 });
      assert.strictEqual(line.slope, 0);
    });

    it("should return infinity if line is parallel to y-axis and difference between y's is whole number", function() {
      const line = new Line({ x: 2, y: 0 }, { x: 2, y: 2 });
      assert.strictEqual(line.slope, Infinity);
    });

    it("should return -infinity if line is parallel to y-axis and difference between y's is negative", function() {
      const line = new Line({ x: 2, y: 2 }, { x: 2, y: 0 });
      assert.strictEqual(line.slope, -Infinity);
    });

    it("should return positive slope when difference between coordinates are positive", function() {
      const line = new Line({ x: 2, y: 0 }, { x: 3, y: 2 });
      assert.strictEqual(line.slope, 2);
    });

    it("should return negative slope when difference between y's is negative", function() {
      const line = new Line({ x: 2, y: 2 }, { x: 3, y: 0 });
      assert.strictEqual(line.slope, -2);
    });

    it("should return negative slope when difference between x's is negative", function() {
      const line = new Line({ x: 2, y: 2 }, { x: 0, y: 4 });
      assert.strictEqual(line.slope, -1);
    });

    it("should return negative slope when difference between x's is 0", function() {
      const line = new Line({ x: 2, y: 2 }, { x: 2, y: 4 });
      assert.strictEqual(line.slope, Infinity);
    });
  });

  describe("findX", function() {
    it("should find x when y is present in the line y coordinates ", function() {
      const line = new Line({ x: 2, y: 2 }, { x: 4, y: 4 });
      assert.strictEqual(line.findX(2), 2);
      assert.strictEqual(line.findX(4), 4);
    });

    it("should find x if y is not present in the line coordinates ", function() {
      const line = new Line({ x: 2, y: 2 }, { x: 2, y: 4 });
      assert.strictEqual(line.findX(3), 2);
    });

    it("should find same x for all y coordinates when it is parallel to x-axis ", function() {
      const line = new Line({ x: 2, y: 2 }, { x: 2, y: 5 });
      assert.strictEqual(line.findX(3), 2);
      assert.strictEqual(line.findX(5), 2);
    });

    it("should find give decimal value when decimal point is returning ", function() {
      const line = new Line({ x: 2, y: 2 }, { x: 3, y: 4 });
      assert.strictEqual(line.findX(3), 2.5);
    });

    it("should find give nan when y exceeded the line ", function() {
      const line = new Line({ x: 2, y: 2 }, { x: 2, y: 4 });
      assert.isNaN(line.findX(5));
      assert.isNaN(line.findX(1));
    });
  });

  describe("findY", function() {
    it("should find y when x is present in the line x coordinates ", function() {
      const line = new Line({ x: 2, y: 2 }, { x: 4, y: 4 });
      assert.strictEqual(line.findY(2), 2);
      assert.strictEqual(line.findY(4), 4);
    });

    it("should find y if x is not present in the line coordinates ", function() {
      const line = new Line({ x: 2, y: 2 }, { x: 4, y: 2 });
      assert.strictEqual(line.findY(3), 2);
    });

    it("should find same y for all x coordinates when it is parallel to y-axis ", function() {
      const line = new Line({ x: 2, y: 2 }, { x: 5, y: 2 });
      assert.strictEqual(line.findY(3), 2);
      assert.strictEqual(line.findY(4), 2);
    });

    it("should find give decimal value when decimal point is returning ", function() {
      const line = new Line({ x: 2, y: 2 }, { x: 4, y: 3 });
      assert.strictEqual(line.findY(3), 2.5);
    });

    it("should find give nan when x exceeded the line ", function() {
      const line = new Line({ x: 2, y: 2 }, { x: 2, y: 4 });
      assert.isNaN(line.findY(5));
      assert.isNaN(line.findY(1));
    });
  });

  describe("split", function() {
    it("should split a line into two equal parts when line is given ", function() {
      const line = new Line({ x: 3, y: 5 }, { x: 1, y: 3 });
      const actual = line.split();
      const expected = [
        new Line({ x: 3, y: 5 }, { x: 2, y: 4 }),
        new Line({ x: 2, y: 4 }, { x: 1, y: 3 })
      ];
      assert.deepStrictEqual(actual, expected);
    });
  });

  describe("hasPoint", function() {
    it("should return true if point is present on end of that line", function() {
      const line = new Line({ x: 3, y: 5 }, { x: 2, y: 4 });
      const point1 = new Point({ x: 3, y: 5 });
      const actual1 = line.hasPoint(point1);
      assert.isTrue(actual1);

      const point2 = new Point({ x: 2, y: 4 });
      const actual2 = line.hasPoint(point2);
      assert.isTrue(actual2);
    });

    it("should return true if point is present on that line", function() {
      const line = new Line({ x: 3, y: 5 }, { x: 7, y: 5 });
      const point = new Point({ x: 5, y: 5 });
      const actual = line.hasPoint(point);
      assert.isTrue(actual);
    });

    it("should return false if point is not present on that line", function() {
      const line = new Line({ x: 3, y: 5 }, { x: 7, y: 5 });
      const point = new Point({ x: 1, y: 5 });
      const actual = line.hasPoint(point);
      assert.isFalse(actual);
    });

    it("should return false if point is not instance of Point", function() {
      const line = new Line({ x: 3, y: 5 }, { x: 7, y: 5 });
      const point = { x: 5, y: 5 };
      const actual = line.hasPoint(point);
      assert.isFalse(actual);
    });
  });
});
