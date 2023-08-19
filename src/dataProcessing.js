const { differenceInMinutes } = require('./timeUtils')

function processInput(data) {
    let students = {};

    data.forEach(line => {
        const parts = line.split(' ');
        if (parts[0] === 'Student') {
            if (parts.length !== 2) {
                throw new Error(`Invalid Student format: ${line}`);
            }
            const name = parts[1];
            students[name] = {
                totalMinutes: 0,
                days: new Set()
            };
        } else if (parts[0] === 'Presence') {
            if (parts.length !== 6) {
                throw new Error(`Invalid Presence format: ${line}`);
            }
            const [_, studentName, day, start, end, _room] = parts;
            if (!students[studentName]) {
                throw new Error(`Student ${studentName} not registered`);
            }
            if (day < 1 || day > 7) {
                throw new Error(`Invalid day of the week: ${day}`);
            }
            const minutes = differenceInMinutes(start, end);
            if (minutes >= 5) {
                students[studentName].totalMinutes += minutes;
                students[studentName].days.add(day);
            }
        } else {
            throw new Error(`Invalid command: ${parts[0]}`);
        }
    });

    return students;
}

function generateReport(students) {
    const sortedStudents = Object.entries(students).sort((a, b) => b[1].totalMinutes - a[1].totalMinutes);

    let report = [];
    for (const [student, data] of sortedStudents) {
        report.push(`${student}: ${data.totalMinutes} minutes in ${data.days.size} ${data.days.size === 1 ? 'day' : 'days'}`);
    }

    return report.join('\n');
}

module.exports = {
    processInput,
    generateReport
};
