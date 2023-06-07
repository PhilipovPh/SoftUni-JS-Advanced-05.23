const result = require('./2.evenOrOdd');
const expect = require('chai').expect;

describe('Three tests', function () {
    it('Is the function undefined', function () {
        expect(result(1)).to.equal(undefined);
    })
    it('Is the function defining Odd strings', function () {
        expect(result('abc')).to.equal('odd');
    })
    it('Is the function defining Even strings', function () {
        expect(result('abcd')).to.equal('even')
    })
})