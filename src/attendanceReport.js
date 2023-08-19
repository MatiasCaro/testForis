const { readFile } = require('./fileHandler');
const { processInput, generateReport } = require('./dataProcessing');

function main() {
    try {
        const filename = 'input.txt';
        const data = readFile(filename);
        const students = processInput(data);
        const report = generateReport(students);
        console.log(report);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

main();