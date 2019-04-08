// Tutorial 6 - Pipes & Pipe Chaining

const fs = require('fs');
const zlib = require('zlib');

// Creates Zip Folder with File
// const gzip = zlib.createGzip();
// const readStream = fs.createReadStream('./example.txt', 'utf8');
// const writeStream = fs.createWriteStream('example2.txt.gz');
// readStream.pipe(gzip).pipe(writeStream);

// Unzips Folder
const gunzip = zlib.createGunzip();
const readStream = fs.createReadStream('./example2.txt.gz');
const writeStream = fs.createWriteStream('uncompressedFile.txt');
readStream.pipe(gunzip).pipe(writeStream);
