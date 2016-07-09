const LinkedList = require('algorithms').DataStructures.LinkedList;
const expect = require('chai').expect;
const twoDotOne = require('../../src/chapter2/2-1').twoDotOne;
const removeElFromList = require('../../src/chapter2/2-1').removeElFromList;

describe('2-1', function() {
    describe('twoDotOne', function() {
        it('should work', function() {
           const original = 'aabcccccaaa';
           const input = new LinkedList();
           for (c of original) {
               input.add(c);
           }

           const expected = new LinkedList();
           expected.add('a');
           expected.add('b');
           expected.add('c');

           const actual = twoDotOne(input);
           expect(actual).to.have.property('length', 3);
           expect(actual.get(0)).to.be.equal('a');
           expect(actual.get(1)).to.be.equal('b');
           expect(actual.get(2)).to.be.equal('c');
        });
    });

    describe('removeElFromList', function() {
        it('should work', function() {
           const original = 'aababbbaababccc';
           const input = new LinkedList();
           for (c of original) {
               input.add(c);
           }

           const expected = new LinkedList();
           const res = 'ab';
           for (c of res) {
               expected.add(c);
           }

           const actual = removeElFromList('a', 1, input);
           expect(actual).to.have.property('length', 10);
           expect(actual.get(0)).to.be.equal('a');
           expect(actual.get(1)).to.be.equal('b');
        });
    });
});
