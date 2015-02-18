var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('default', ['scss'], function() {
    gulp.watch('scss/*.scss', ['scss']);
});

gulp.task('test', function() {
    sass('tests/', {
            style: 'expanded',
            "sourcemap=none": true,
            trace: true
        })
        .pipe(gulp.dest('css'));

    gulp.watch('**/*.scss', ['test']);
});