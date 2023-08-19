const chai = require('chai');
const { parseTime, differenceInMinutes } = require('../src/timeUtils');
const expect = chai.expect;

describe('timeUtils', () => {
    describe('parseTime', () => {
        it('should correctly parse valid time', () => {
            expect(parseTime('09:04')).to.equal(544);
            expect(parseTime('00:00')).to.equal(0);
            expect(parseTime('23:59')).to.equal(1439);
        });

        it('should throw error for invalid time', () => {
            expect(() => parseTime('25:00')).to.throw();
            expect(() => parseTime('09:60')).to.throw();
        });
    });

    describe('differenceInMinutes', () => {
        it('should correctly calculate time difference', () => {
            expect(differenceInMinutes('09:00', '10:00')).to.equal(60);
            expect(differenceInMinutes('10:15', '11:45')).to.equal(90);
        });

        it('should throw error when end time is before start time', () => {
            expect(() => differenceInMinutes('11:00', '10:00')).to.throw();
        });
    });
});
