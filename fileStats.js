const fs = require('fs');

if(process.argv.length !==3) {
  console.log(`Usage: node fileStats.js <file name>`);
  return;
}

const filename = process.argv[2];
const content = fs.readFileSync(filename, 'utf8');

console.log('File Content:');
console.log(content);

const lines = content.split('\n').length;
console.log('Lines Count:', lines);
