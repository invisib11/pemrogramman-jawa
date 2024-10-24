function execute(ast) {
    const context = {};

    ast.body.forEach(node => {
        if (node.type === "VariableDeclaration") {
            context[node.name] = eval(node.value); // Hati-hati dengan eval
        } else if (node.type === "FunctionDeclaration") {
            context[node.name] = function (...args) {
                const localContext = { ...context };
                node.body.forEach(statement => {
                    if (statement === 'bali') {
                        return args.reduce((a, b) => a + b, 0); // Misalnya hanya untuk jumlah
                    }
                });
            };
        } else if (node.type === "IfStatement") {
            if (eval(node.condition)) {
                execute(parser(lexer(node.body.join(' '))));
            }
        } else if (node.type === "WhileStatement") {
            while (eval(node.condition)) {
                execute(parser(lexer(node.body.join(' '))));
            }
        } else if (node.type === "ConsoleLog") {
            console.log(eval(node.value));
        }
    });
}

module.exports = execute;
