

const { src, dest, series } = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
let cleanCSS = require('gulp-clean-css');

function concatCss() {
  return src('./src/components/*.css')
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concat('main.css'))
    .pipe(dest('dist'));
}

exports.default = series(concatCss);
