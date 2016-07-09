const expect = require('chai').expect;
const oneDotSeven = require('../../src/chapter1/1-7');

describe('1-7', function() {
    it('should work, case 1', function() {
       const input = [
         [0, 1, 1],
         [1, 1, 1],
         [1, 1, 1]
       ];
       const expected = [
         [0, 0, 0],
         [0, 1, 1],
         [0, 1, 1]
       ];

       expect(oneDotSeven(input)).to.be.eql(expected);
    });

    it('should work, case 2', function() {
       const input = [
         [1, 1, 1],
         [1, 0, 1],
         [1, 1, 1]
       ];
       const expected = [
         [1, 0, 1],
         [0, 0, 0],
         [1, 0, 1]
       ];

       expect(oneDotSeven(input)).to.be.eql(expected);
    });

    it('should work, case 3', function() {
       const input = [
         [1, 0, 1],
         [1, 1, 1],
         [1, 1, 1]
       ];
       const expected = [
         [0, 0, 0],
         [1, 0, 1],
         [1, 0, 1]
       ];

       expect(oneDotSeven(input)).to.be.eql(expected);
    });
});
