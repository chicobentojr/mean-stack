var gulp = require('gulp'),
	webserver = require('gulp-webserver');

gulp.task('serve', /*['app.js'],*/ function() {
	gulp.src('app')
	.pipe(webserver({
		livereload: true,
		open: true,
		directoryListening: true
	}));
});