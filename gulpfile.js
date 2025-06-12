const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
    return gulp.src('./src/styles/*.scss') // Adjust the path as needed
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css')); // Adjust the output path as needed
}

exports.default = styles;
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles)); // Watch for changes in SCSS files
}