#!/usr/bin/env bash

echo "Creating dist..."
rm -rf ./dist
mkdir dist

echo "Concat styles..."
cat src/components/*.css > dist/main.css

echo "Copy HTML..."
cp ./src/*.html dist

echo "Concat scripts..."
cat src/js/*.js > dist/index.js

echo "!---DONE---!"
