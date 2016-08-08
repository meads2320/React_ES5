var gulp = require("gulp");
var connect = require("gulp-connect"); // Runs local dev server 
var open = require("gulp-open"); // Open a URL in a web browser

var browserify = require("browserify"); // Bundles JS
var reactify = require("reactify"); // Transforms React JSX to JS
var source = require("vinyl-source-stream"); // Use conventional text strams with gulp
var concat = require("gulp-concat"); // Concatenates files 


var config = {
    port: 9805,
    devBaseUrl: 'http://localhost',
    paths : {
        html : './src/**/*.html',
        js : './src/**/*.js',
        images: './src/images/*',
        css : [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
            'node_modules/toastr/build/toastr.css',
        ],
        mainJs : './src/main.js',
        dist: './dist' 
    }
};

//Start a dev server 
gulp.task('connect', function() {
    connect.server({
        root : ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});

gulp.task('open', ['connect'], function() {
    gulp.src('dist/index.html')
        .pipe(open( { uri : config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('html', function() {
     gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('css', function() {
     gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
     .pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('images', function() {
     gulp.src(config.paths.images)
     .pipe(gulp.dest(config.paths.dist + '/images'))
     .pipe(connect.reload());
});

gulp.task('js', function() {
     browserify(config.paths.mainJs)
     .transform(reactify)
     .bundle()
     .on('error', console.error.bind(console))
     .pipe(source('bundle.js'))
     .pipe(gulp.dest(config.paths.dist + '/scripts'))
     .pipe(connect.reload());
});


gulp.task('watch', function() {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js']);
    gulp.watch(config.paths.css, ['css']);
      gulp.watch(config.paths.images, ['images']);
});

gulp.task('default', ['html', 'js', 'css',  'images', 'open' ,'watch']);