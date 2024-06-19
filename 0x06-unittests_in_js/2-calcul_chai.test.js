const calculateNumber = require('./2-calcul_chai');
const { expect } = require('chai');

describe('calculateNumber', function () {
    describe('SUM operation', function () {
        it('add rounded numbers', function () {
	    expect(calculateNumber('SUM', 3, 5)).to.equal(8);
	    expect(calculateNumber('SUM', 8, 6)).to.equal(14);
	    expect(calculateNumber('SUM', 3.7, 2.3)).to.equal(6);
	    expect(calculateNumber('SUM', -0.3, 0.3)).to.equal(0);
	});
    });
    
    describe('SUBTRACT operation', function () {
        it('subtract rounded b from a', function () {
            expect(calculateNumber('SUBTRACT', 3, 5)).to.equal(-2);
            expect(calculateNumber('SUBTRACT', 8, 6)).to.equal(2);
            expect(calculateNumber('SUBTRACT', 3.7, 2.7)).to.equal(1);
            expect(calculateNumber('SUBTRACT', 0.3, 0.3)).to.equal(0);
        });
    });

    describe('DIVIDE operation', function () {
        it('divide  a by rounded b', function () {
            expect(calculateNumber('DIVIDE', 40, 5)).to.equal(8);
            expect(calculateNumber('DIVIDE', 18, 6)).to.equal(3);
            expect(calculateNumber('DIVIDE', 4.4, 4.4)).to.equal(1);
            expect(calculateNumber('DIVIDE', 2.4, 0)).to.equal('Error');
        });
    });
});
