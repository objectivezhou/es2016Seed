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


gulp.task('css', ()=>{
	return gulp.src('app/**/*.css')
		.pipe(gulp.dest('server/public'))
})