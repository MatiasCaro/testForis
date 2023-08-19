const fs = require('fs');

function readFile(filename) {
    if (!fs.existsSync(filename)) {
        throw new Error(`File ${filename} does not exist`);
    }
    return fs.readFileSync(filename, 'utf-8').split('\n').filter(line => line);
}

module.exports = {
    readFile
};