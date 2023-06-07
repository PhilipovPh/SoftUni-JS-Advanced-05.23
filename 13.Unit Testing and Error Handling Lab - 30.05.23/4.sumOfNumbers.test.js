const expect = require('chai').expect;
const sum = require('./4.sumOfNumbers');


describe('Sum of numbers', () => {
    it('It should return the sum of numbers in the arr', () => {
        let numbers = [1, 2, 3, 4, 5];
        let expectedSum = 15;
        let actualSum = sum(numbers);

        expect(actualSum).to.equal(expectedSum);
    })
});