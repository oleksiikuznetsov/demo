    // create variables for do our task
const gulp        = require('gulp'),
      sass        = require('gulp-sass'),
      browserSync = require('browser-sync');

    // create task's

    // task sass
gulp.task('sass', function() {
    return gulp.src('app/sass/index.sass', gulp.series('sass'))
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}))
});

    // task browser-sync
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});
    // task watch
gulp.task('watch', function() {
    gulp.watch('app/sass/index.sass', gulp.series('sass'))
});

gulp.task('default', gulp.parallel('watch', 'browser-sync'));
