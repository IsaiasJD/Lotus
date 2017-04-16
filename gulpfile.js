var gulp = require('gulp');
var flatten = require('gulp-flatten');
var rename = require('gulp-rename');
var PATH = require('path');
var exec = require('child_process').execSync;
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-minify-css');
var include = require('gulp-include');
var tap = require('gulp-tap');

var srcdir = '_dist';

var publishdir = 'production';
var publishDist = 'production/dist';
var publishSrc = 'production/src';
var src = {
    vendorCss: [
        srcdir + '/**/*.css',
        '!' + srcdir + '/css/site.css',
        '!' + srcdir + '/assets/css/style.css'
    ],
    siteCss: [
        srcdir + '/css/site.css',
        srcdir + '/assets/css/style.css'
    ],
    vendorJs: [
        srcdir + '/**/*.js',
        '!' + srcdir + '/js/site.js',
        '!' + srcdir + '/assets/js/site.js'
    ],
    siteJs: [
        srcdir + '/js/site.js',
        srcdir + '/assets/js/main.js'
    ],
    allJs:[
      srcdir + '/**/*.js'
    ],
    allCss:[
      srcdir + '/**/*.css'
    ],
    assets: [
        srcdir + '/assets/**/*',
        '!' + srcdir + '/assets/css/',
        '!' + srcdir + '/assets/js/',
        '!' + srcdir + '/assets/css/**',
        '!' + srcdir + '/assets/js/**',
        '!' + srcdir + '/assets/main.css'
    ]
}
var dist = {
    //all: [publishdir + '/**/*'],
    css: publishDist + '/static/',
    js: publishDist + '/static/',
    vendor: publishDist + '/static/',
    assets: publishDist + '/assets/'
}


// call jekyll build command
gulp.task('jekyll-build', function() {
    console.log('Building Jekyll project...')
    exec('bundle exec jekyll build')
})

// dev build
gulp.task('dev:flatten', ['jekyll-build'], function() {
    gulp.src(['_dist/**/*.html', '!_dist/js', '!_dist/css', '!_dist/assets'], {
            base: '_dist'
        })
        .pipe(rename(function(path) {
            if (path.dirname !== '.') {
                path.basename = path.dirname;
            }
        }))
        .pipe(flatten())
        .pipe(gulp.dest(publishSrc))
})
gulp.task('dev', ['dev:flatten'], function() {
    gulp.src(['_dist/assets/**/*', '_dist/css/**/*', '_dist/js/**/*'], {
            "base": "_dist/"
        })
        .pipe(gulp.dest(publishSrc))
})
gulp.task('build-dev', ['dev'])

// production build
// call jekyll build command
gulp.task('set-prod-env', function() {
    console.log('set jekyll production environment')
    exec('set JEKYLL_ENV=production')
})
gulp.task('jekyll-build-prod', ['set-prod-env'], function() {
    console.log('Building Jekyll project...')
    exec('bundle exec jekyll build')
})
// gulp.task('buildSiteCss', function() {
//     return gulp.src(src.siteCss)
//         .pipe(concat('site.css'))
//         .pipe(gulp.dest(dist.css))
// });
// gulp.task('buildSiteJs', function() {
//     return gulp.src(src.siteJs)
//         .pipe(include())
//         .pipe(concat('site.js'))
//         .pipe(gulp.dest(dist.js))
// });
// gulp.task('buildVendorCss', function() {
//     return gulp.src(src.vendorCss)
//         .pipe(concat('vendor.css'))
//         .pipe(gulp.dest(dist.css))
// });
// gulp.task('buildVendorJs', function() {
//     return gulp.src(src.vendorJs)
//         .pipe(include())
//         .pipe(concat('vendor.js'))
//         .pipe(gulp.dest(dist.js))
// });
// gulp.task('compress-js', ['buildSiteJs', 'buildVendorJs'])
// gulp.task('compress-css', ['buildSiteCss', 'buildVendorCss'])
gulp.task('compress-js', function(){
    gulp.src(src.allJs)
    .pipe(uglify())
    .pipe(gulp.dest(publishDist))
})
gulp.task('compress-css', function(){
    gulp.src(src.allCss)
    .pipe(cssmin())
    .pipe(gulp.dest(publishDist))
})
gulp.task('compress', ['compress-css', 'compress-js'])
gulp.task('prod', ['jekyll-build-prod', 'compress'], function() {
    gulp.src(src.assets)
        .pipe(gulp.dest(dist.assets))
})
gulp.task('build-production', ['prod'], function() {
    gulp.src(srcdir + '/index.html')
        .pipe(gulp.dest(publishDist))
})
