const chai = require('chai');
const { processInput } = require('../src/dataProcessing');
const expect = chai.expect;

describe('dataProcessing', () => {
    describe('processInput', () => {
        it('should correctly process valid input', () => {
            const data = [
                'Student Marco',
                'Presence Marco 1 09:02 10:17 R100'
            ];
            const students = processInput(data);
            expect(students['Marco'].totalMinutes).to.equal(75);
            expect([...students['Marco'].days]).to.deep.equal(['1']);
        });

        it('should throw error for invalid input', () => {
            const data = ['Random Marco'];
            expect(() => processInput(data)).to.throw();
        });
    });
});
