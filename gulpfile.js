var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var less = require('gulp-less');
var cssmin = require('gulp-minify-css');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');


gulp.task('less', function () {
    gulp.src('public/stylesheet/*.less')
    	.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(less())
        .pipe(cssmin())
        .pipe(gulp.dest('public/stylesheet'));
});

 
gulp.task('watch', function() {
    gulp.watch('public/**/*.less', ['less']);
});


gulp.task('nodemon', function () {
  nodemon({
    script: 'app.js',
 	  ext: 'js',
  	env: { PORT:3000 },
  	watch:'./',
  	ignore:'node_modules/**',
  })
})

gulp.task('default',['nodemon','watch']);