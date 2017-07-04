import gulp from 'gulp';
import gulpif from 'gulp-if';
import concat from 'gulp-concat';
import webpack from 'webpack';
import named from 'vinyl-named';
import gulpWebpack from 'webpack-stream';
import livereload from 'gulp-livereload';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import { log, colors } from 'gulp-util';
import args from './util/args';
import liveserver from 'gulp-live-server';


gulp.task('serve', (cb)=>{
	if(!args.watch) return cb();

	var server = liveserver.new(['--harmony', 'server/bin/www']);
	server.start();

	gulp.watch(['server/public/**/*.js', 'server/views/**/*.ejs'], function(file) {
		server.notify.apply(server, [file]);
	})

	gulp.watch(['server/routes/**/*.js', 'server/app.js'], function() {
		server.start.bind(server)()
	});
})