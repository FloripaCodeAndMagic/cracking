const expect = require('chai').expect;
const oneDotEight = require('../1-8');

describe('1-8', function() {
    it('should work, true', function() {
       const s1 = 'waterbottle';
       const s2 = 'erbottlewat';
       expect(oneDotEight(s1, s2)).to.be.true;
    });

    it('should work, false', function() {
       const s1 = 'waterbottle';
       const s2 = 'whatever';

       expect(oneDotEight(s1, s2)).to.be.false;
    });

    it('should not work for anagrams', function() {
       const s1 = 'waterbottle';
       const s2 = 'elttobretaw';

       expect(oneDotEight(s1, s2)).to.be.false;
    });
});
