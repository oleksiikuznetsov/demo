    // create variables for do our task
const gulp        = require('gulp'),
      sass        = require('gulp-sass');

    // create task's

    // task sass
    gulp.task('sass', function() {
    return gulp.src('app/sass/index.sass', gulp.series('sass'))
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}))
});
    // task watch
gulp.task('watch', function() {
    gulp.watch('app/*.html').on('change', browserSync.reload);
    gulp.watch('app/js*.js').on('change', browserSync.reload)
});

gulp.task('default', gulp.parallel('watch', 'sass', 'browser-sync'));


gulp.task('build', function() {
    let buildCss = gulp.src('app/css/index.css')
    .pipe(gulp.dest('dist/css'));

    let buildFonts = gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));

    let buildJs = gulp.src('app/js/**/*')
    .pipe(gulp.dest('dist/js'));

    let buildHtml = gulp.src('app/*.html')
    .pipe(gulp.dest('dist'));
});