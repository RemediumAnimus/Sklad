'use strict';

var gulp = require('gulp'),
	watch = require('gulp-watch'),
	plumber = require('gulp-plumber'),
	sass = require('gulp-sass'),
	rigger = require('gulp-rigger'),
	rimraf = require('rimraf'),
	browserSync = require("browser-sync"),
	reload = browserSync.reload;

var path = {
	build: {
		html: '../Sklad',
		css: 'css/'
	},
	src: {
		html: 'src/html/[^_]*.html',
		style: 'src/sass/*.scss'
	},
	watch: {
		html: 'src/html/**/*.html',
		style: 'src/sass/**/*.scss'
	}
};

var config = {
	server: {
		baseDir: ""
	},
	tunnel: true,
	host: 'localhost',
	port: 9000,
	logPrefix: "Zzz"
};

gulp.task('webserver', function () {
	browserSync(config);
});

gulp.task('clean', function (cb) {
	rimraf('./*.html', cb);
	rimraf('./css/', cb);
});

gulp.task('html:build', function () {
	gulp.src(path.src.html)
		.pipe(plumber())		
		.pipe(rigger())
		.pipe(gulp.dest(path.build.html))
		.pipe(reload({stream: true}));
});

gulp.task('style:build', function () {
	gulp.src(path.src.style)
		.pipe(plumber())
		.pipe(sass())		
		.pipe(gulp.dest(path.build.css))
		.pipe(reload({stream: true}));
});

gulp.task('build', [
	'html:build',
	'style:build'
]);


gulp.task('watch', function(){
	watch([path.watch.html], function(event, cb) {
		gulp.start('html:build');
	});
	watch([path.watch.style], function(event, cb) {
		gulp.start('style:build');
	});
});


gulp.task('default', ['build', 'webserver', 'watch']);