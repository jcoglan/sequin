var Sequin = require("../lib/sequin"),
    Test   = require("jstest").Test

Test.describe("Sequin", function() { with(this) {
  before(function() { with(this) {
    this.bits = [
      1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,
      0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,
      0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,
      0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,
      1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,
      0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,
      0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,
      1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,
      0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,
      0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,
      0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,
      0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,
      1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,
      0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,
      1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,
      0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,
      1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,
      1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,
      1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,
      1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,
      0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,
      1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,
      0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,
      0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,
      1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,
      0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,
      1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,
      1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0
    ]

    this.stream = new Sequin(this.bits)
  }})

  define("generate", function(base) { with(this) {
    var result = [], value = true
    while (value !== null) {
      value = stream.generate(base)
      if (value !== null) result.push(value)
    }
    return result
  }})

  it("returns zero for base 1", function() { with(this) {
    assertEqual( 0, stream.generate(1) )
    assertEqual( bits, stream._bases[2] )
  }})

  it("generates base 2 output", function() { with(this) {
    assertEqual( bits, generate(2) )
  }})

  it("generates base 3 output", function() { with(this) {
    assertEqual([
      2,1,1,0,1,1,0,1,2,2,0,0,1,1,1,0,0,0,1,0,2,1,1,0,0,1,1,0,1,2,1,0,2,1,1,0,0,
      2,1,1,1,1,1,1,2,0,1,0,0,1,1,2,1,2,0,2,1,2,0,2,1,1,0,2,2,0,1,0,0,1,2,2,1,2,
      0,0,0,1,1,0,2,1,1,1,2,0,2,1,2,0,0,1,0,0,0,2,1,0,2,0,2,0,2,1,0,1,2,2,2,2,0,
      2,0,0,2,0,2,1,0,1,2,1,2,1,0,1,0,1,0,0,1,1,1,1,2,0,0,1,1,0,1,1,2,2,1,2,2,2,
      1,1,0,0,0,1,0,2,2,1,1,2,0,1,2,1,2,0,1,1,2,2,2,1,0,2,2,2,1,1,0,2,2,0,1,0,0,
      2,2,2,2,1,1,2,0,2,0,0,2,2,1,1,1,1,1,2,0,2,1,2,2,1,2,2,1,0,0,0,1,0,2,1,1,0,
      2,1,1,0,0,2,0,0,0,0,2,2,2,2,2,0,1,2,0,1,0,0,0,2,0,0,1,2,2,1,0,1,1,2,2,1,0,
      1,1,0,0,1,0,2,2,1,0,0,2,1,2,0,1,1,2,0,1,0,1,0,1,1,1,0,1,0,0,0,2,0,2,1,1,1,
      0,0,1,0,2,2,2,0,0,1,0,2,2,1,0,1,1,2,0,0,2,1,1,1,1,2,1,0,1,1,0,2,1,2,0,0,2,
      2,1,2,0,0,2,0,1,0,2,0,0,1,0,1,2,2,0,1,0,0,1,0,1,1,0,2,0,1,2,0,1,2,2,0,2,0,
      0,0,2,2,2,2,1,1,1,0,2,2,2,2,1,2,2,0,2,2
    ], generate(3) )
  }})

  it("generates base 4 output", function() { with(this) {
    assertEqual([
      2,1,3,1,0,1,1,0,1,2,3,2,0,3,0,1,1,1,0,0,0,3,1,0,2,1,3,1,0,0,3,1,1,0,1,2,1,
      0,2,1,1,0,3,0,2,1,1,1,1,3,1,3,1,3,2,0,1,0,0,1,1,3,2,3,3,1,3,2,3,0,2,1,2,0,
      2,1,3,1,0,3,3,3,2,2,0,1,0,0,3,3,1,3,2,2,1,3,2,0,0,0,1,1,3,3,0,2,1,1,3,1,2,
      0,3,3,2,1,2,0,3,0,1,3,0,0,0,2,1,3,0,3,2,0,3,2,0,2,3,3,1,0,1,3,2,2,2,2,0,2,
      0,0,2,0,2,1,3,0,1,3,3,2,1,2,3,1,0,1,0,1,0,0,1,1,1,1,3,2,0,0,1,3,1,3,0,1,3,
      1,2,2,3,3,1,3,3,2,3,2,3,2,1,3,3,1,0,0,3,0,3,1,0,2,3,2,1,1,2,0,1,2,3,3,1,3,
      2,0,1,1,3,3,2,2,3,2,1,0,2,2,2,1,1,0,2,2,0,1,3,3,3,3,0,0,2,2,3,2,2,1,1,2,0,
      2,0,3,0,2,2,3,1,3,1,3,3,1,3,1,1,2,0,2,1,2,2,1,2,2,1,0,0,0,3,1,0,2,1,1,0,2,
      3,1,1,0,0,3,2,0,0,0,0,2,2,3,2,2,2,3,3,3,0,1,2,0,1,0,3,0,0,3,2,0,3,3,0,1,2,
      2,1,0,3,1,1,2,2,1,0,1,3,1,0,0,1,0,2,3,3,2,3,3,1,0,3,0,2,1,2,0,3,1,1,2,0,1,
      0,1,0,1,3,1,1,0,1,0,0,3,0,2,0,2,3,1,1,3,1,0,3,3,0,1,0,2,3,2,2,0,0,1,0,2,2,
      1,3,0,1,1,2,0,0,2,3,3,1,1,3,1,1,2,1,0,1,1,0,3,2,1,2,0,3,0,3,2,2,1,2,0,0,3,
      2,0,1,0,3,3,2,0,0,1,0,1,2,2,0,3,1,3,0,0,3,1,3,0,1,1,3,0,2,3,0,1,3,2,0,1,2,
      2,3,3,0,2,0,0,3,0,3,2,2,2,2,1,3,1,3,1,0,2,2,3,2,2,1,2,2,0,2,2
    ], generate(4) )
  }})

  it("generates base 5 output", function() { with(this) {
    assertEqual([
      4,2,1,2,1,1,4,2,3,0,0,4,4,4,2,0,3,0,2,2,2,4,4,2,2,3,0,4,1,0,1,3,0,2,3,1,1,
      4,2,3,1,2,2,0,4,1,3,4,2,4,0,0,2,4,4,1,1,4,1,4,3,4,0,2,3,4,0,0,0,2,1,2,2,0,
      4,0,4,2,3,4,3,2,4,4,4,2,1,0,1,2,2,0,0,3,4,3,3,1,2,3,1,3,2,0,3,2,2,1,3,0,3,
      3,0,4,1,3,3,4,4,0,2,2,4,0,3,2,4,1,2,2,2,1,0,4,2,0,0,2,1,1,3,1,1,0,0,1,4,4,
      1,3,2,4,1,1,0,0,1,2,2,1,1,4,1,1,4,1,1,0,4,4,4,0,1,0,2,0,2,2,3,1,4,4,1,1,3,
      0,2,1,0,2,2,4,2,0,2,1,3,2,0,2,3,1,1,3,3,0,0,4,1,1,1,3,0,1,3,3,3,4,4,2,4,1,
      4,3,1,4,0,3,4,1,1,3,4,0,2,1,0,1,0,3,3,4,2,1,3,0,4,1,3,3,2,0,3,1,4,2,3,0,4,
      3,3,1,0,0
    ], generate(5) )
  }})

  it("generates base 6 output", function() { with(this) {
    assertEqual([
      4,2,1,2,1,5,1,4,2,5,0,0,4,4,2,0,5,0,2,2,2,4,2,2,5,3,5,4,1,0,1,3,5,3,1,1,4,
      2,3,5,1,2,0,4,1,3,4,4,0,0,5,4,4,5,1,4,1,4,3,4,0,2,3,4,0,0,5,2,1,2,5,0,4,0,
      4,2,3,4,3,4,4,2,1,0,1,2,5,0,0,3,4,3,5,5,3,3,5,3,2,0,3,2,2,1,3,0,3,3,4,1,3,
      5,3,4,4,5,2,2,4,5,0,3,4,1,2,2,2,1,0,2,5,5,2,1,1,5,1,5,1,0,0,4,4,5,1,3,2,4,
      1,0,0,1,2,2,5,1,4,1,1,4,1,1,0,4,4,5,5,1,0,2,0,2,2,5,1,4,4,1,5,3,0,2,1,0,2,
      4,2,0,2,1,3,2,2,3,1,1,3,5,0,0,4,5,1,1,3,0,1,3,5,5,4,4,2,4,1,4,3,1,4,0,3,4,
      1,1,4,0,2,1,5,0,0,3,3,4,2,1,3,0,4,1,5,3,2,0,3,1,5,2,3,5,4,5,3,5,1,5,0,5,2,
      2,0,5,5,4,5,4,5,3,0,5,0,2,3,2,5,0,2,2,0,2
    ], generate(6) )
  }})

  it("generates base 7 output", function() { with(this) {
    assertEqual([
      4,2,1,2,1,5,6,1,4,2,5,0,0,6,4,4,2,0,6,5,0,6,2,2,2,4,6,2,2,5,3,5,6,4,1,0,1,
      3,6,5,3,1,1,4,2,3,5,1,2,0,4,1,3,6,4,4,0,0,5,4,4,5,6,6,1,4,6,1,4,3,4,0,2,3,
      4,0,0,5,2,1,2,5,0,4,0,4,2,3,4,3,4,6,6,4,2,1,0,1,2,5,0,0,3,4,3,5,5,3,6,3,5,
      6,3,2,0,6,3,2,2,1,3,0,3,3,6,4,1,3,5,3,4,4,5,2,2,4,5,0,3,4,1,2,2,2,6,1,0,6,
      2,5,5,6,6,2,6,1,1,5,1,5,1,0,0,6,4,4,5,1,3,2,4,1,6,0,0,1,2,2,5,6,1,4,1,1,4,
      1,6,1,0,6,4,4,6,5,5,1,0,2,0,2,2,6,5,1,4,4,6,1,5,3,0,2,1,0,2,4,2,0,6,2,1,3,
      2,2,3,6,1,1,3,5,0,0,4,5,1,6,1,3,0,1,3,6,5,6,5,4,4,2,4,1,4,3,1,6,4,6,0,3,4,
      1,1,4,0,2,1,5,0,6,0,3,3,4,2,1,3,0,4,1,5,3,6,2,0,3,1,6,5,2,3,5,6,4,5,3,5,1,
      5,0,5
    ], generate(7) )
  }})

  it("generates base 8 output", function() { with(this) {
    assertEqual([
      4,7,2,1,2,1,5,6,1,4,2,5,0,0,6,4,4,7,2,0,6,5,0,6,2,2,2,4,6,2,2,5,3,5,6,7,4,
      1,0,1,3,6,7,5,7,3,1,1,4,2,3,5,1,7,7,2,0,4,1,7,3,6,4,7,4,0,0,5,7,4,4,5,6,6,
      1,7,4,6,1,4,3,4,0,2,3,4,7,0,7,0,5,7,2,1,7,2,5,0,4,0,4,2,3,4,3,7,4,6,6,4,2,
      1,0,1,2,5,7,0,0,7,3,4,3,5,5,3,6,7,7,3,5,6,3,7,2,0,6,3,2,2,7,1,3,0,3,3,6,7,
      4,1,3,7,5,3,4,4,5,2,2,4,5,0,3,7,7,4,1,2,7,2,2,6,1,0,6,2,5,5,6,7,6,7,2,6,1,
      1,5,1,5,1,0,0,6,4,4,5,1,3,2,4,1,6,0,0,1,2,7,2,5,7,6,1,4,1,1,4,1,6,1,7,0,6,
      4,4,6,5,5,1,0,7,2,0,2,2,7,6,7,5,1,4,4,6,1,5,3,0,2,1,0,7,2,4,2,0,6,2,1,3,2,
      7,2,3,6,1,1,3,5,0,0,4,5,1,6,1,3,0,1,3,6,5,6,5,4,4,2,4,7,1,4,3,1,6,4,6,0,3,
      4,1,1,7,4,0,2,1,5,0,6,7,0,3,3,4,2,7,1,3,0,7,4,1,5,3,6,2,0,3,1,6,5,2,3,5,6,
      4,5,3,5,1,5,0,5
    ], generate(8) )
  }})

  it("generates base 9 output", function() { with(this) {
    assertEqual([
      4,1,4,6,3,1,5,0,3,4,8,0,5,4,6,4,4,3,5,7,7,7,8,4,1,7,2,6,3,8,4,3,7,1,0,7,7,
      7,8,0,5,2,5,8,6,8,7,0,2,7,3,8,8,2,4,7,7,2,0,8,7,7,8,6,1,1,0,5,5,6,0,7,7,1,
      2,7,6,4,7,0,4,2,6,5,8,6,7,8,5,3,4,7,4,1,4,0,7,8,6,2,3,2,7,7,0,6,2,6,1,4,0,
      2,2,5,2,4,3,8,0,2,3,0,1,8,4,3,8,0,1,4,2,6,1,4,0,4,1,4,8,4,6,1,1,1,4,4,3,2,
      2,5,7,4,1,2,2,8,1,2,3,5,8,2,5,6,4,5,3,8,3,8,8,3,8,4,8,1,1,7,3,7,0,4,5,5,1,
      1,0,2,0,4,0,4,2,3,6,8,8
    ], generate(9) )
  }})

  it("generates base 10 output", function() { with(this) {
    assertEqual([
      9,1,4,6,2,3,1,5,0,3,4,9,0,1,4,6,4,9,4,9,5,7,7,7,8,4,1,7,3,2,9,8,9,5,3,1,0,
      5,7,7,8,0,5,5,2,5,8,3,9,8,7,0,2,7,3,8,6,2,4,7,0,2,0,8,9,7,6,6,1,1,0,5,5,2,
      0,7,7,1,8,7,8,7,7,0,5,2,5,8,6,9,7,8,5,4,4,9,4,0,1,0,4,9,6,2,3,2,7,7,9,6,2,
      6,9,8,4,0,2,5,2,1,4,3,8,0,2,6,1,1,8,4,3,8,7,1,4,3,6,9,1,0,4,9,9,4,9,8,5,6,
      1,1,1,4,4,3,2,2,1,7,4,1,2,8,1,2,9,6,5,8,2,5,6,4,5,3,9,8,0,9,8,3,8,4,9,8,1,
      1,3,7,0,3,5,4,1,0,1,5,2,0,6,9,3,2,9,6,8,0
    ], generate(10) )
  }})

  it("generates base 11 output", function() { with(this) {
    assertEqual([
      9,1,4,6,2,3,1,5,0,3,4,9,0,1,4,6,4,9,4,9,5,7,7,7,8,4,1,7,5,2,9,8,9,7,3,10,
      1,0,7,10,7,8,0,5,2,5,8,9,8,10,7,0,2,7,3,8,2,8,4,7,10,10,2,0,8,9,7,8,6,1,1,
      0,5,5,2,0,7,7,1,10,3,7,7,7,6,0,7,2,5,8,6,8,7,8,5,10,8,4,10,9,4,10,1,0,10,
      9,6,2,3,2,4,7,7,1,6,2,6,9,10,4,0,2,5,2,1,4,3,8,0,2,10,0,1,8,4,10,3,8,1,10,
      4,6,9,1,0,4,10,8,4,9,8,7,6,1,1,1,4,4,3,2,2,1,7,4,1,2,8,8,1,2,9,5,8,2,9,5,
      6,4,5,3,9,8,0,9,8,3,8,4,8,8,1,1,10,3,7,0,0,5,5,1,1,10,8,2,0,8,10,9,1,2,10,
      6,8,10
    ], generate(11) )
  }})

  it("generates base 12 output", function() { with(this) {
    assertEqual([
      9,1,4,6,6,3,1,5,0,3,4,9,0,5,4,6,4,9,4,9,5,7,7,7,8,4,1,7,11,1,8,9,8,9,3,7,
      10,1,0,7,10,7,8,0,5,2,5,8,7,9,8,7,0,2,7,3,8,2,2,4,7,10,10,2,0,8,9,7,2,6,1,
      1,0,5,5,6,0,7,7,1,10,7,7,10,7,9,0,1,2,5,8,6,11,7,8,5,10,4,10,9,4,10,1,11,
      0,10,9,6,2,3,2,11,7,7,9,6,2,6,9,10,4,0,5,2,5,2,4,3,8,0,2,11,10,11,7,1,8,4,
      3,8,3,1,10,4,6,9,1,5,0,4,11,11,4,9,8,1,6,1,1,1,4,4,3,2,2,5,7,4,1,2,8,1,2,
      9,8,5,8,2,5,6,4,5,3,9,8,4,9,8,3,8,4,11,8,1,1,10,3,7,0,4,5,11,1,2,1,10,2,0,
      2,10,9,5,2,11,10,6,8,10
    ], generate(12) )
  }})

  it("generates base 13 output", function() { with(this) {
    assertEqual([
      9,1,4,6,3,1,5,0,3,4,9,3,0,4,6,4,9,4,12,9,5,7,7,7,8,4,1,7,11,1,12,9,8,9,3,
      10,1,0,8,7,10,7,8,0,5,2,5,8,7,9,8,12,7,0,2,7,3,8,2,4,7,10,10,2,0,8,9,12,7,
      3,6,1,1,0,5,5,0,7,7,1,3,10,7,9,7,0,12,9,2,5,8,6,7,8,5,4,10,4,10,9,4,10,1,
      4,0,10,9,6,2,3,2,11,7,7,9,6,2,6,9,10,4,0,2,5,2,4,3,8,0,2,11,10,11,2,1,8,4,
      12,3,8,1,10,4,6,9,1,5,0,4,11,4,12,9,8,2,6,1,1,1,4,4,3,2,2,7,4,2,1,2,8,1,2,
      9,12,5,8,2,5,2,6,4,5,3,9,8,12,9,8,3,8,4,8,1,1,10,3,7,0,2,12,5,12,11,1,1,
      10,2,0,12,3,10,9,2,11,10,6,8,10
    ], generate(13) )
  }})

  it("generates base 14 output", function() { with(this) {
    assertEqual([
      9,13,1,4,6,3,1,5,0,3,4,9,13,0,13,4,6,4,9,4,12,9,5,7,7,7,8,4,1,7,11,13,12,
      9,8,9,13,3,10,1,0,7,10,7,8,0,5,2,5,13,8,9,8,12,7,0,2,7,3,8,2,4,7,10,10,2,
      0,8,9,12,7,6,13,1,1,0,5,5,0,7,7,1,13,10,7,7,13,0,12,13,2,5,8,6,7,8,5,10,4,
      10,9,4,10,1,0,10,9,6,2,3,2,11,7,7,13,13,6,2,6,9,10,4,0,13,2,5,2,13,4,3,8,
      0,2,11,10,11,1,8,4,12,3,8,1,10,4,13,6,9,1,13,0,4,11,4,12,9,8,13,6,1,1,1,
      13,4,4,3,2,2,13,7,4,1,2,8,1,2,9,12,5,8,2,5,13,6,4,5,3,9,8,12,9,8,3,8,4,8,
      1,1,10,3,7,0,13,12,5,12,11,1,1,10,2,0,12,10,9,13,13,2,11,10,6,8,10,3,13,2,
      1,11,6,13,5
    ], generate(14) )
  }})

  it("generates base 15 output", function() { with(this) {
    assertEqual([
      9,13,1,4,6,14,3,1,5,0,3,4,9,13,0,13,4,6,4,9,4,12,9,5,7,7,7,8,4,1,7,11,13,
      14,12,9,8,9,13,3,10,1,0,7,10,7,8,0,5,2,5,13,8,9,8,12,7,0,2,7,3,8,14,2,4,7,
      10,10,2,0,8,9,12,7,14,6,13,1,1,0,5,5,14,0,7,7,1,13,10,7,14,14,14,7,13,0,
      12,13,2,14,5,8,6,7,8,5,10,14,4,10,9,4,10,1,0,10,14,9,6,2,3,2,11,7,7,13,13,
      6,2,6,9,10,4,0,13,2,5,2,13,4,3,8,0,2,11,10,11,1,8,4,12,3,8,1,10,4,13,6,9,
      1,13,0,4,11,14,4,12,9,8,13,6,1,1,1,13,4,4,3,2,2,13,7,4,1,2,14,8,1,2,9,12,
      5,8,2,5,13,6,4,5,3,9,8,12,14,9,8,3,8,4,8,1,1,10,3,7,0,13,12,5,12,11,1,14,
      1,10,2,0,12,14,10,9,13,13,2,11,10,6,8,10
    ], generate(15) )
  }})

  it("generates base 16 output", function() { with(this) {
    assertEqual([
      9,13,1,4,6,14,3,1,5,0,3,4,9,13,0,13,4,6,4,9,4,12,9,5,7,7,7,8,4,1,7,11,13,
      14,12,9,8,9,13,3,15,10,1,0,15,7,10,7,8,0,5,15,2,5,13,8,15,9,8,12,7,0,2,7,
      3,8,14,2,15,4,7,10,10,2,0,8,9,12,7,14,6,13,1,1,0,5,5,14,0,7,7,1,13,10,15,
      7,14,14,14,7,13,0,12,13,2,14,5,8,6,15,7,8,5,15,10,14,4,10,9,4,10,1,15,15,
      0,10,14,9,6,2,3,2,11,7,7,13,13,6,2,6,9,10,4,0,13,2,5,2,13,4,3,8,0,2,11,10,
      11,15,1,8,4,12,3,8,15,1,10,4,13,6,9,1,13,0,4,11,14,15,4,12,9,8,13,6,1,1,1,
      13,4,4,3,2,2,13,7,4,15,1,2,14,8,1,2,9,12,5,8,2,15,5,13,6,4,5,3,9,8,12,14,
      9,8,3,8,4,15,8,1,1,10,3,7,0,13,12,5,12,11,1,14,1,10,15,2,0,12,14,10,9,13,
      13,2,11,10,6,8,10
    ], generate(16) )
  }})

  it("generates base 17 output", function() { with(this) {
    assertEqual([
      16,10,6,12,10,16,6,13,14,16,16,9,9,16,10,14,1,2,1,15,15,15,12,2,14,15,8,8,
      15,15,9,0,11,13,10,12,12,14,0,10,13,9,15,10,11,0,7,3,13,13,8,16,10,0,16,7,
      14,7,13,15,15,3,7,3,6,0,0,3,15,15,1,15,10,1,14,7,16,10,11,2,6,10,9,15,9,6,
      9,0,13,4,16,10,7,0,1,11,15,16,9,16,14,15,3,9,6,8,7,8,4,15,12,1,3,11,1,2,7,
      10,4,6,8,13,9,9,14,16,4,15,11,0,1,1,2,3,3,7,9,16,14,2,15,16,4,13,3,14,3,
      14,5,4,12,15,1,3,16,12,10,14,5,5,14,8
    ], generate(17) )
  }})

  it("generates base 18 output", function() { with(this) {
    assertEqual([
      16,10,6,12,10,16,6,14,14,16,17,4,9,9,10,5,14,2,1,15,15,15,12,7,2,14,9,8,8,
      15,15,9,0,11,6,11,17,12,12,14,0,7,17,2,0,15,10,17,0,17,7,3,13,8,8,16,10,
      16,7,14,7,13,15,15,7,7,6,3,6,10,3,15,15,1,15,10,14,12,7,5,16,14,11,2,6,10,
      5,3,17,6,9,0,13,4,16,4,7,0,1,11,15,12,9,16,4,15,3,9,6,2,7,8,4,7,12,5,3,11,
      1,2,7,10,4,6,8,7,9,9,14,16,4,16,11,0,1,14,2,9,3,7,9,16,14,2,15,16,4,13,3,
      14,3,14,5,3,12,15,1,16,16,12,10,14,3,5,14,8
    ], generate(18) )
  }})

  it("generates base 19 output", function() { with(this) {
    assertEqual([
      1,10,6,12,10,16,6,18,14,16,10,17,18,9,9,18,10,14,6,2,1,15,15,15,12,2,14,0,
      8,8,15,15,9,0,11,18,13,17,12,12,14,0,10,17,5,15,15,10,17,0,17,7,3,13,11,8,
      16,10,16,7,14,7,13,15,15,3,7,2,3,6,18,6,3,15,15,1,15,5,18,14,7,6,16,14,11,
      2,6,10,13,11,17,6,9,0,13,4,1,2,7,0,1,11,15,12,9,16,17,15,3,9,6,18,7,8,4,5,
      16,12,3,11,1,2,7,10,4,6,8,3,9,4,9,14,16,4,3,11,0,16,2,2,0,3,7,9,16,14,2,
      15,16,4,13,3,14,3,14,5,12,15,1,4,16,12,13,10,14,5,14,16,8
    ], generate(19) )
  }})

  it("generates base 20 output", function() { with(this) {
    assertEqual([
      19,10,6,8,12,10,16,6,18,14,16,17,18,9,9,18,10,15,14,2,1,15,15,15,12,19,2,
      14,19,11,8,8,15,15,9,0,11,4,18,17,18,12,12,14,0,19,19,17,11,15,10,17,0,17,
      7,3,10,13,8,16,10,3,16,7,14,7,13,15,15,7,7,3,6,18,0,3,15,15,1,15,10,18,16,
      0,7,16,13,11,2,6,10,19,3,17,6,19,9,0,13,4,12,4,7,0,1,11,15,16,9,16,16,15,
      3,9,6,18,7,8,4,7,10,12,19,3,11,1,2,7,10,4,6,8,7,9,9,14,16,4,16,11,0,19,18,
      2,19,19,3,7,9,16,14,2,15,16,4,13,3,14,3,14,5,5,12,15,1,0,16,12,10,14,17,5,
      14,19,8
    ], generate(20) )
  }})

  it("generates base 21 output", function() { with(this) {
    assertEqual([
      19,20,10,6,12,10,16,6,18,14,16,19,17,18,9,9,18,10,14,10,2,1,15,15,15,12,
      19,2,14,19,8,8,15,15,9,0,11,18,1,17,12,12,14,0,19,19,17,18,20,15,10,17,0,
      17,7,3,10,13,20,8,16,10,16,7,14,7,13,15,15,7,7,6,3,6,18,15,3,15,15,1,15,
      20,18,20,20,20,7,16,8,11,2,6,10,19,7,17,6,19,9,0,13,4,20,1,20,7,0,1,11,15,
      3,9,16,19,15,3,9,6,18,7,8,4,13,8,12,19,3,11,1,2,7,10,4,6,8,13,9,9,14,16,4,
      20,0,11,0,1,17,2,19,19,3,7,9,16,14,2,15,16,4,13,3,14,3,14,5,12,15,1,2,16,
      12,1,10,14,5,14,19,8
    ], generate(21) )
  }})

  it("generates base 22 output", function() { with(this) {
    assertEqual([
      19,20,10,6,12,10,16,6,18,14,16,20,17,18,9,9,18,10,14,18,2,1,15,15,15,12,
      19,2,14,19,8,8,15,15,9,0,11,18,1,17,12,12,14,0,19,19,17,16,20,15,10,17,0,
      17,7,3,18,13,20,8,16,10,16,7,14,7,13,15,15,15,7,14,3,6,18,16,3,15,15,1,15,
      2,18,20,20,20,7,16,21,14,11,2,6,10,7,21,17,6,19,9,0,13,4,20,6,20,7,0,1,11,
      21,15,0,9,16,15,3,9,6,16,18,7,8,4,15,12,19,3,11,1,2,7,10,4,6,8,18,9,16,9,
      14,16,4,20,11,0,17,21,21,2,19,19,3,7,9,16,14,2,15,16,4,13,3,14,3,14,5,12,
      15,1,21,14,16,12,10,14,11,5,14,19,8
    ], generate(22) )
  }})

  it("generates base 23 output", function() { with(this) {
    assertEqual([
      19,20,10,6,12,10,16,6,18,14,16,2,17,18,9,9,18,10,14,7,2,1,15,15,15,12,19,
      2,14,19,8,8,15,15,9,0,11,18,5,17,12,12,14,0,19,19,17,18,20,15,10,17,0,17,
      7,3,7,13,20,8,16,10,16,7,14,7,13,15,15,4,7,3,3,6,18,22,3,15,15,1,15,2,18,
      20,20,20,7,7,16,21,11,2,6,10,8,4,21,17,6,19,9,0,13,4,20,22,20,7,0,1,11,21,
      15,10,9,16,15,3,9,6,22,18,7,8,4,22,16,12,19,3,11,1,2,7,10,4,6,8,22,9,5,9,
      14,16,4,20,11,0,22,21,6,2,19,19,3,7,9,16,14,2,15,16,4,13,3,14,3,14,5,12,
      15,1,21,0,16,12,10,14,14,5,14,19,8
    ], generate(23) )
  }})

  it("generates base 24 output", function() { with(this) {
    assertEqual([
      19,20,10,6,12,10,16,6,18,14,16,10,17,18,9,9,18,10,23,14,2,1,15,15,15,12,
      19,2,14,19,8,8,15,15,9,0,11,12,18,17,22,12,12,14,0,19,19,17,23,20,15,10,
      17,0,17,7,3,6,13,20,8,16,10,23,16,7,14,7,13,15,15,23,7,2,3,6,18,22,3,15,
      15,1,15,10,18,20,20,20,7,15,16,21,11,2,6,10,19,23,21,17,6,19,9,0,13,4,20,
      22,20,7,0,1,11,21,15,0,9,16,4,15,3,9,6,22,18,7,8,4,23,2,12,19,3,11,1,2,7,
      10,4,6,8,22,23,9,9,14,16,4,20,12,11,0,23,21,17,2,19,19,3,7,9,16,14,2,15,
      16,4,13,3,14,3,14,5,12,15,1,21,12,16,12,10,14,21,5,14,19,8
    ], generate(24) )
  }})

  it("generates base 25 output", function() { with(this) {
    assertEqual([
      19,20,10,6,12,10,16,6,18,14,16,22,17,18,9,9,18,10,23,14,2,1,15,15,15,12,
      19,2,14,19,8,8,15,15,9,0,11,24,18,17,17,12,12,14,0,19,19,17,24,23,20,15,
      10,17,0,17,7,3,13,20,8,16,10,23,16,7,14,7,13,15,15,23,7,3,6,18,10,22,3,15,
      15,1,15,10,18,20,20,20,7,16,21,6,11,2,6,10,23,16,21,17,6,19,9,0,13,4,20,
      22,20,7,0,1,11,21,15,24,24,9,16,15,3,9,6,22,18,7,8,4,23,23,12,19,3,11,1,2,
      7,10,4,6,8,22,23,9,10,9,14,16,4,20,11,0,23,21,22,2,19,19,3,7,9,16,14,2,15,
      16,4,13,3,14,3,14,5,0,12,15,1,21,16,12,10,14,5,14,19,8
    ], generate(25) )
  }})

  it("generates base 26 output", function() { with(this) {
    assertEqual([
      19,20,10,6,12,10,16,6,18,14,16,12,17,18,9,9,18,10,23,14,2,1,15,15,15,12,
      19,2,14,19,8,8,15,15,9,0,11,14,18,17,22,12,12,14,0,19,19,17,24,23,20,15,
      10,17,0,17,7,3,13,20,8,16,10,23,16,7,14,7,13,15,15,25,23,7,3,6,18,2,22,3,
      15,15,1,15,2,18,20,20,20,7,16,21,8,11,2,6,10,23,7,21,17,6,19,9,0,13,4,20,
      22,20,7,0,1,11,21,15,24,24,9,16,15,3,9,6,22,18,7,8,4,23,13,12,19,3,11,1,2,
      7,10,4,6,8,22,23,9,2,9,14,16,4,20,11,0,23,21,12,25,2,19,19,3,7,9,16,14,2,
      15,16,4,13,3,14,3,14,5,25,12,15,1,21,16,12,15,10,14,5,14,19,8
    ], generate(26) )
  }})

  it("generates base 27 output", function() { with(this) {
    assertEqual([
      19,20,10,6,12,10,16,6,18,14,16,26,17,18,9,9,18,10,23,14,2,1,15,15,15,12,
      19,2,14,19,17,8,8,15,15,9,0,11,18,5,17,12,12,14,0,19,19,17,24,23,20,15,10,
      17,0,17,7,3,13,20,8,16,10,23,16,7,14,7,13,15,15,9,23,7,26,3,6,18,22,3,15,
      15,1,15,26,18,20,20,20,7,7,16,21,26,11,2,6,10,23,21,17,6,19,9,0,13,4,20,
      22,20,7,0,1,11,21,15,24,24,9,16,1,15,3,9,6,22,18,7,8,4,23,26,12,19,3,11,1,
      2,7,10,4,6,8,22,23,9,9,14,16,4,20,6,11,0,23,21,26,25,2,19,19,3,7,9,16,14,
      2,15,16,4,13,3,14,3,14,5,25,12,15,1,21,16,12,10,14,10,5,14,19,8
    ], generate(27) )
  }})

  it("generates base 28 output", function() { with(this) {
    assertEqual([
      19,20,10,6,12,10,16,6,18,14,16,26,17,18,9,9,18,10,23,14,2,1,15,15,15,12,
      19,2,14,19,11,8,8,15,15,9,0,11,18,1,17,12,12,14,0,19,19,17,24,23,20,15,10,
      17,0,17,7,3,13,20,8,16,10,23,16,7,14,7,13,15,15,27,23,7,26,3,6,18,12,22,3,
      15,15,1,15,26,18,20,20,20,7,16,21,26,11,2,6,10,27,23,27,21,17,6,19,9,0,13,
      4,20,22,20,7,0,1,11,21,15,24,24,9,16,12,15,3,9,6,22,18,7,8,4,23,27,26,12,
      19,3,11,1,2,7,10,4,6,8,22,23,9,9,14,16,4,20,11,0,23,21,26,25,2,19,19,3,7,
      9,16,14,2,15,16,4,13,3,14,3,14,5,25,12,15,1,21,0,16,12,10,14,5,14,19,8
    ], generate(28) )
  }})

  it("generates base 29 output", function() { with(this) {
    assertEqual([
      19,20,10,6,28,12,10,16,6,18,14,16,26,17,18,9,9,18,10,23,14,2,1,15,15,15,
      12,19,2,14,19,8,8,15,15,9,28,0,11,28,18,17,17,12,12,14,0,19,19,17,24,23,
      20,15,10,17,0,17,7,3,13,20,8,16,10,23,16,7,14,7,13,15,15,27,23,7,26,3,6,
      18,28,22,3,15,15,1,15,26,28,18,20,20,20,7,16,21,26,11,2,6,10,27,23,27,21,
      17,6,19,9,0,13,4,20,22,20,7,0,1,11,21,15,24,24,9,16,28,15,3,9,6,22,18,7,8,
      4,23,27,26,12,19,3,11,1,2,7,10,4,6,8,22,23,9,28,9,14,16,4,20,28,11,0,23,
      21,26,25,2,19,19,3,7,9,16,14,2,15,16,4,13,3,14,3,14,5,25,12,15,1,21,28,16,
      12,10,14,16,5,14,19,8
    ], generate(29) )
  }})

  it("generates base 52 output", function() { with(this) {
    assertEqual([
      39,17,17,46,12,21,0,39,16,1,6,18,20,50,21,29,33,1,30,45,9,34,29,15,38,4,
      15,30,39,32,5,37,46,15,38,12,28,2,28,0,47,17,40,32,34,28,31,38,20,17,1,21,
      7,28,29,43,51,46,31,16,51,18,37,24,27,33,31,43,36,42,20,40,31,44,10,22,8,
      50,45,23,22,9,41,41,0,36,37,11,20,14,0,10,47,49,33,12,14,15,6,36,21,41,7,
      16,18,12,38,13,24,17,7,20,16,50,11,23,19,49,11,40,4,41,49,24,11,13,36,20,
      35,14,38,3,33,15,32,17,40,11,3,28,23,11,7,33,43,50,3,14,42,29,43,41,40
    ], generate(52) )
  }})

  it("generates base 62 output", function() { with(this) {
    assertEqual([
      39,17,17,46,12,21,0,52,39,16,53,6,18,20,50,21,29,55,33,1,30,61,59,9,34,29,
      15,58,4,15,30,39,32,5,60,37,54,15,38,12,28,2,28,56,56,47,17,58,40,32,34,
      28,31,38,52,17,1,21,56,7,28,29,43,55,59,46,31,16,51,18,57,24,27,55,33,31,
      43,36,42,20,40,31,60,10,58,22,8,50,45,55,55,22,9,41,41,0,52,37,11,20,14,0,
      10,58,47,49,33,12,14,15,6,36,53,41,7,16,18,61,12,38,13,24,17,7,20,16,50,
      11,23,19,49,11,40,4,41,49,24,11,53,53,36,20,57,35,14,38,3,33,15,32,17,40,
      55,3,28,23,11,7,33,43,50,3,14,42,29,52,43,41,40
    ], generate(62) )
  }})

  it("generates base 94 output", function() { with(this) {
    assertEqual([
      78,69,13,10,64,87,29,6,81,73,20,85,32,32,38,60,76,39,39,8,61,34,2,68,75,
      88,85,14,2,57,69,4,61,40,65,9,9,90,17,2,87,64,14,17,30,78,25,82,25,26,47,
      73,41,37,7,4,10,88,70,43,59,21,44,38,77,16,26,37,22,80,2,93,47,53,4,13,36,
      89,36,58,4,61,25,24,47,4,35,84,33,72,90,22,75,80,18,78,22,5,43,17,39,24,
      38,7,4,54,4,52,55,6,57,49,6,72,12,39,58,43,83,34
    ], generate(94) )
  }})
}})
