const expect = require('chai').expect;
const oneDotFive = require('../../src/chapter1/1-5');

describe('1-5', function() {
    it('should compress big things', function() {
       const input = 'aabcccccaaa';
       const expected = 'a2b1c5a3';

       expect(oneDotFive(input)).to.be.equal(expected);
    });

    it('should not compress if string would not become smaller than original', function() {
       const input = 'abc';
       const expected = 'abc';

       expect(oneDotFive(input)).to.be.equal(expected);
    });
});
