const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const webpackStream = require('webpack-stream');
const path = require('path');

const webpackConfig = require('./webpack.config');

gulp.task(
	'development',
	['compile', 'watch'],
	() => {
		gulp.start('browser-sync')
	}
);

gulp.task('browser-sync', () => {
	browserSync.init({
		proxy: 'localhost:3000',
		open: 'local'
	});
});

gulp.task('watch', () => {
	gulp.watch(path.resolve('./scripts/**/*.*'), ['build']);
	gulp.watch(path.resolve('./styles/*.*'), ['build']);
	gulp.watch(path.resolve('./index.html'), ['build']);
});

gulp.task('build', ['compile'], () => {
	browserSync.reload();
});

gulp.task('compile', () =>
	gulp
		.src('./index.html')
		//.src('./app.js')
		.pipe(webpackStream(webpackConfig, require("webpack")))
		.pipe(gulp.dest('./public'))
);

