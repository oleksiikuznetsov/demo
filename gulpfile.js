    // create variables for do our task
const gulp          = require('gulp'),
      sass          = require('gulp-sass'),
      autoprefixer  = require('gulp-autoprefixer'),
      browserSync   = require('browser-sync');

    // create task's

    // task sass
gulp.task('sass', function() {
    return gulp.src('app/sass/index.sass', gulp.series('sass'))
    .pipe(sass())
    .pipe(autoprefixer(['last 15 versions', 'ie 8', 'ie 7'], {cascade: true}))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}))
});
    // task browserSync
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
    gulp.watch('app/sass/index.sass', gulp.series('sass'));
    gulp.watch('app/*.html').on("change", browserSync.reload);    
});

gulp.task('default', gulp.parallel('browser-sync', 'watch', 'sass'));