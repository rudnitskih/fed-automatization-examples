#!/usr/bin/env node
const glob = require('glob');
const concat = require('concat');
const fs = require('fs');

const dir = './dist';

if (!fs.existsSync(dir)){
  fs.mkdirSync(dir);
}

glob("**/*.css", function (err, files) {
  concat(files, './dist/main.css');
});
