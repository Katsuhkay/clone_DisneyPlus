const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public/js')) // Alterado para public
}

function styles() {
    return gulp.src('src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('public/css')); // Alterado para public
}

function copyImages() {
    return gulp.src('src/images/**/*')
        .pipe(gulp.dest('public/images')); // Alterado para public
}

function watchFiles() {
    gulp.watch('src/styles/*.scss', styles);
    gulp.watch('src/images/**/*', copyImages);
    gulp.watch('./src/scripts/*.js', scripts);
}

exports.styles = styles;
exports.scripts = scripts;
exports.images = copyImages;
exports.watch = watchFiles;
exports.default = gulp.parallel(styles, copyImages, scripts);