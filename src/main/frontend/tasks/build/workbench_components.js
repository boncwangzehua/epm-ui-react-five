const gulp       = require( 'gulp' );
const babel      = require( 'gulp-babel' );
const cached     = require( 'gulp-cached' );
const header     = require( 'gulp-header' );
const plumber    = require( 'gulp-plumber' );
const print      = require( 'gulp-print' );
const rename     = require( 'gulp-rename' );
const uglify     = require( 'gulp-uglify' )
const path       = require( 'path' );

const config = require( '../config/settings' );
const tasks  = require( '../config/tasks' );

const { paths: { source: { workbench_components: source }, output: { workbench_components: output } }, banner } = config;

module.exports = ( callback ) => {

	  console.info( 'build-workbench_components' );
	  
	  return gulp.src( path.join( source, '**', '*.jsx' ) )
	      .pipe( plumber() )
	      .pipe( cached( 'buildComponents' ) )
	      .pipe( print() )
	      .pipe( babel( tasks.babel.workbench_components ) )
	      .pipe( header( banner ) )
	      .pipe( gulp.dest( output ) )
	      .pipe( uglify( tasks.uglify ) )
	      .pipe( header( banner ) )
	      .pipe( rename( ( path ) => {
	        path.basename += '.min'
	        return path;
	      } ) )
	      .pipe( gulp.dest( output ) );

	};