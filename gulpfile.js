const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
    return gulp.src('src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
}

function copyImages() {
    return gulp.src('src/images/**/*')
        .pipe(gulp.dest('dist/images'));
}

// Tarefa watch modificada
function watchFiles() {
    gulp.watch('src/styles/*.scss', styles);
    gulp.watch('src/images/**/*', copyImages);
}

// Exportando as tarefas
exports.styles = styles;
exports.images = copyImages;
exports.watch = watchFiles;
exports.default = gulp.parallel(styles, copyImages);