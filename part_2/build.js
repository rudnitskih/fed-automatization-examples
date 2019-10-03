const glob = require('glob');
const concat = require('concat');
const fs = require('fs');
const rimraf = require('rimraf');

console.log('Build started...');

rimraf.sync('./dist');
fs.mkdirSync('./dist');

glob("src/components/*.css", function (err, files) {
  concat(files, './dist/main.css');
});

console.log('Build finished!');
