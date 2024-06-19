const calculateNumber = require('./1-calcul');
const assert = require('assert');

describe('calculateNumber() with type SUM', () => {
    it('add 3 and 5', () => {
	assert.equal(calculateNumber('SUM', 3, 5), 8);
    });
    it('add 8 and 6', () => {
        assert.equal(calculateNumber('SUM', 8, 6), 14);
    });
    it('add 3 and 5', () => {
        assert.equal(calculateNumber('SUM', 3.7, 2.3), 6);
    });
    it('add -0.3 and 0.3', () => {
        assert.equal(calculateNumber('SUM', -0.3, 0.3), 0);
    });
});

describe('calculateNumber() with type SUBTRACT', () => {
    it('subtract 3 and 5', () => {
        assert.equal(calculateNumber('SUBTRACT', 3, 5), -2);
    });
    it('subtract 8 and 6', () => {
        assert.equal(calculateNumber('SUBTRACT', 8, 6), 2);
    });
    it('subtract 3.7 and 2.7', () => {
        assert.equal(calculateNumber('SUBTRACT', 3.7, 2.7), 1);
    });
    it('subtract -0.3 and 0.3', () => {
        assert.equal(calculateNumber('SUBTRACT', 0.3, 0.3), 0);
    });
});

describe('calculateNumber() with type DIVIDE', () => {
    it('divide 40 and 5', () => {
        assert.equal(calculateNumber('DIVIDE', 40, 5), 8);
    });
    it('divide 18 and 6', () => {
        assert.equal(calculateNumber('DIVIDE', 18, 6), 3);
    });
    it('divide 4.4 and 4.4', () => {
        assert.equal(calculateNumber('DIVIDE', 4.4, 4.4), 1);
    });
    it('divide 2.4 and 0', () => {
        assert.equal(calculateNumber('DIVIDE', 2.4, 0), 'Error');
    });
});
