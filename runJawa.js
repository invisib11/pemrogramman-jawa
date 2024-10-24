const fs = require('fs');
const { runJawaFromFile } = require('./index');

const filePath = process.argv[2]; // Ambil argumen dari command line

if (!filePath) {
    console.error('Harap masukkan path ke file .jawa');
    process.exit(1);
}

// Baca dan jalankan file .jawa
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading file: ${err}`);
        return;
    }
    runJawaFromFile(data);
});
