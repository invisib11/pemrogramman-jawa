const lexer = require('./lexer');

function parser(tokens) {
    const ast = { type: "Program", body: [] };
    let currentToken;

    while (tokens.length) {
        currentToken = tokens.shift();

        if (currentToken === 'tetap' || currentToken === 'ganti') {
            const variableName = tokens.shift();
            const assignmentOperator = tokens.shift(); // harus '='
            const value = tokens.shift(); // ambil nilai
            ast.body.push({
                type: "VariableDeclaration",
                name: variableName,
                value: value
            });
        } else if (currentToken === 'fungsi') {
            const funcName = tokens.shift();
            const params = [];
            while (tokens[0] !== '{') {
                params.push(tokens.shift());
            }
            tokens.shift(); // Menghilangkan '{'
            const body = [];
            while (tokens[0] !== '}') {
                body.push(tokens.shift());
            }
            tokens.shift(); // Menghilangkan '}'
            ast.body.push({
                type: "FunctionDeclaration",
                name: funcName,
                params: params,
                body: body
            });
        } else if (currentToken === 'menawi') {
            const condition = tokens.shift();
            const body = [];
            tokens.shift(); // Menghilangkan '{'
            while (tokens[0] !== '}') {
                body.push(tokens.shift());
            }
            tokens.shift(); // Menghilangkan '}'
            ast.body.push({
                type: "IfStatement",
                condition: condition,
                body: body
            });
        } else if (currentToken === 'nalika') {
            const condition = tokens.shift();
            const body = [];
            tokens.shift(); // Menghilangkan '{'
            while (tokens[0] !== '}') {
                body.push(tokens.shift());
            }
            tokens.shift(); // Menghilangkan '}'
            ast.body.push({
                type: "WhileStatement",
                condition: condition,
                body: body
            });
        } else if (currentToken === 'log.konsol') {
            const value = tokens.shift(); // ambil nilai untuk dicetak
            ast.body.push({
                type: "ConsoleLog",
                value: value
            });
        } else if (currentToken === 'kanggo') {
            // Tambahkan logika untuk loop for jika diperlukan
        } else if (currentToken === 'pilih') {
            // Tambahkan logika untuk switch statement jika diperlukan
        }
    }
    return ast;
}

module.exports = parser;
