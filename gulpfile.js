var gulp = require('gulp');
//var flatten = require('gulp-flatten');
//var rename = require('gulp-rename');
var PATH = require('path');
var exec = require('child_process').execSync;
//var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-minify-css');
//var include = require('gulp-include');
//var tap = require('gulp-tap');

var srcdir = '_dist';

var publishdir = 'production';
var src = {
    jsDir:[
      srcdir + '/js/**/*.js'
    ],
    cssDir:[
      srcdir + '/css/**/*.css'
    ],
    assets: [
        srcdir + '/assets/**/*'
    ]
}


// call jekyll build command
gulp.task('jekyll-build', function() {
    console.log('Building Jekyll project...')
    exec('bundle exec jekyll build')
})

gulp.task('compress-js', function(){
    gulp.src(src.jsDir)
    .pipe(uglify())
    .pipe(gulp.dest(publishdir + '/js'))
})
gulp.task('compress-css', function(){
    gulp.src(src.cssDir)
    .pipe(cssmin())
    .pipe(gulp.dest(publishdir + '/css'))
})
gulp.task('compress', ['compress-css', 'compress-js'])
gulp.task('prod', ['jekyll-build', 'compress'], function() {
    gulp.src(src.assets)
        .pipe(gulp.dest(publishdir + '/assets'))
})
gulp.task('build-production', ['prod'], function() {
    gulp.src(srcdir + '/index.html')
        .pipe(gulp.dest(publishdir))
})
