var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('scss', function() {
    gulp.src('scss/*.scss')
        .pipe(sass({
            style: 'expanded',
            "sourcemap=none": true,
            trace: true
        }))
        .pipe(gulp.dest('css'));
});

gulp.task('default', ['scss'], function() {
    gulp.watch('scss/*.scss', ['scss']);
});

gulp.task('test', ['scss'], function() {
    gulp.src('tests/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));

    gulp.watch('tests/*.scss', ['test']);
});