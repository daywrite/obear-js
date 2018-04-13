import obear from '../src/index'
import chai from 'chai'
// let expect = chai.expect
let assert = chai.assert

describe("regular.isIngeter", () => {
  it('test spec', function () {
    assert.equal(obear.reg.isIngeter(undefined), false)
    assert.equal(obear.reg.isIngeter(null), false)
    assert.equal(obear.reg.isIngeter(false), false)
    assert.equal(obear.reg.isIngeter(true), false)
  })
  it('test right', function () {
    assert.equal(obear.reg.isIngeter(0), true)
    assert.equal(obear.reg.isIngeter(-99999999), true)
    assert.equal(obear.reg.isIngeter(999999999999999999999), true)
  })
})

describe("regular.isPositiveInteger", () => {
  it('test spec', function () {
    assert.equal(obear.reg.isIngeter(undefined), false)
    assert.equal(obear.reg.isIngeter(null), false)
    assert.equal(obear.reg.isIngeter(false), false)
    assert.equal(obear.reg.isIngeter(true), false)
  })
  it('test right', function () {
    assert.equal(obear.reg.isPositiveInteger(+0), true)
    assert.equal(obear.reg.isPositiveInteger(0), true)
    assert.equal(obear.reg.isPositiveInteger('+0'), true)
    assert.equal(obear.reg.isPositiveInteger('0'), true)
    assert.equal(obear.reg.isPositiveInteger('00'), false)
    assert.equal(obear.reg.isPositiveInteger('char'), false)
  })
})

describe("regular.isFloatWith2", () => {
  it('test right', function () {
    assert.equal(obear.reg.isFloatWith2(+0), false)
    assert.equal(obear.reg.isFloatWith2(+0), false)
    assert.equal(obear.reg.isFloatWith2(0), false)
    assert.equal(obear.reg.isFloatWith2('+0'), false)
    assert.equal(obear.reg.isFloatWith2('0'), false)
    assert.equal(obear.reg.isFloatWith2('00'), false)
    assert.equal(obear.reg.isFloatWith2('0.'), false)
    assert.equal(obear.reg.isFloatWith2('0.0'), true)
    assert.equal(obear.reg.isFloatWith2('.0'), false)
    assert.equal(obear.reg.isFloatWith2('1.011'), false)
    assert.equal(obear.reg.isFloatWith2('1.01'), true)
  })
})
