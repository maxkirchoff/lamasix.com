var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    header  = require('gulp-header'),
    rename = require('gulp-rename'),
    cssnano = require('gulp-cssnano'),
    sourcemaps = require('gulp-sourcemaps'),
    nunjucksRender = require('gulp-nunjucks-render'),
    package = require('./package.json');


var banner = [
  '/*!\n' +
  ' * <%= package.name %>\n' +
  ' * <%= package.title %>\n' +
  ' * <%= package.url %>\n' +
  ' * @author <%= package.author %>\n' +
  ' * @version <%= package.version %>\n' +
  ' * Copyright ' + new Date().getFullYear() + '. <%= package.license %> licensed.\n' +
  ' */',
  '\n'
].join('');

gulp.task('css', gulp.series(function (done) {
    return gulp.src('src/scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 4 version'))
    .pipe(gulp.dest('app/assets/css'))
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(header(banner, { package : package }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('app/assets/css'))
    .pipe(browserSync.reload({stream:true}));
    done();
}));

gulp.task('js', gulp.series(function(done){
  gulp.src('src/js/scripts.js')
    .pipe(sourcemaps.init())
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(header(banner, { package : package }))
    .pipe(gulp.dest('app/assets/js'))
    .pipe(uglify())
    .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    .pipe(header(banner, { package : package }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('app/assets/js'))
    .pipe(browserSync.reload({stream:true, once: true}));
    done();
}));

gulp.task('nunjucks', gulp.series(function(done) {
  // Gets .html and .nunjucks files in pages
  return gulp.src('src/pages/**/*.+(html|nunjucks)')
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['src/templates']
    }).on('error', function(error) {
      console.log("there was an error compiling nunjucks templates");
      console.log(error);
    }))
  // output files in app folder
  .pipe(gulp.dest('app'));
  done();
}));

gulp.task('browser-sync', gulp.series(function(done) {
    browserSync.init(null, {
        server: {
            baseDir: "app"
        }
    });
    done();
}));

gulp.task('bs-reload', gulp.series(function (done) {
    browserSync.reload();
    done();
}));

gulp.task('dev', gulp.series('css','js', 'nunjucks', 'browser-sync', function(done) {
  gulp.watch("src/scss/**/*.scss", gulp.series('css'));
  gulp.watch("src/js/*.js", gulp.series('js'));
  gulp.watch("src/**/*.nunjucks", gulp.series('nunjucks'));
  gulp.watch("app/*.html", gulp.series('bs-reload'));
  done();
}));

gulp.task('default', gulp.series('css', 'js', 'nunjucks'));
