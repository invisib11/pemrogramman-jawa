function lexer(input) {
    const tokens = [];
    const regex = /\s*(tetap|ganti|fungsi|bali|menawi|menawi ora|nalika|kanggo|log\.konsol|pilih|kasus|standar|{|}|;|\d+|[=+*/-]|"[^"]*")\s*/g;
    let result;
    while (result = regex.exec(input)) {
        tokens.push(result[1]);
    }
    return tokens;
}

module.exports = lexer;
