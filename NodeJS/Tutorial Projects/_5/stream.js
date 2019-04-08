// Tutorial 5 - Why you should use Streams

const fs = require('fs');
const readStream = fs.createReadStream('./largeFile.txt', 'utf8');

readStream.on('data', (chunk) => {
      console.log(chunk);
});
