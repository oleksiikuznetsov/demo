    // create variables for do our task
const gulp          = require('gulp'),
      sass          = require('gulp-sass'),
   // del           = require('del'),
      autoprefixer  = require('gulp-autoprefixer'),
      browserSync   = require('browser-sync');

    // create task's

    // task sass
    gulp.task('sass', function() {
    return gulp.src('app/sass/index.sass', gulp.series('sass'))
    .pipe(sass())
    .pipe(autoprefixer(['last 15 versions', 'ie 8', 'ie 7'], {cascade: true}))
    .pipe(gulp.dest('app/css'))
    .pipe()
});

    // task to clean folder 'dist
    /* commit this task, dont need it at now
gulp.task('clean', function() {
    return del.sync('dist');
});
    */
    gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notidy: false
    });
});


    // task watch
gulp.task('watch', function() {
    gulp.watch('app/sass/**/*.sass', gulp.series('sass'));
});

gulp.task('default', gulp.parallel('watch', 'sass'));

    // create task build, add let to copy files from app to dist
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