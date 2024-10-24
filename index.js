const fs = require('fs');
const lexer = require('./lexer');
const parser = require('./parser');
const execute = require('./executor');

function runJawa(code) {
    const tokens = lexer(code);
    const ast = parser(tokens);
    execute(ast);
}

// Fungsi untuk membaca file .jawa
function runJawaFromFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file: ${err}`);
            return;
        }
        runJawa(data);
    });
}

module.exports = { runJawa, runJawaFromFile };
