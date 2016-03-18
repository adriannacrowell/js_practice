// Dependencies can go here if you want
// Great insight: https://quickleft.com/blog/grunt-js-the-basics/
// Sample: http://gruntjs.com/sample-gruntfile
// Tips: https://quickleft.com/blog/grunt-js-tips-tricks/

module.exports = function(grunt) {
		// All of your Grunt code must be specified inside this function!
		// Setup configuration...
		// Load tasks...
		// Define tasks...

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
/*			jshint: {
					scripts: {
							src: ['scripts/**.js', 'lib/**.js']
					},

					tests: { // We can have more than one jshint task, this ones called `jshint:tests`
							src: 'tests/**.js'
					}
			},
*/

		eslint: {
			all: ['**/*.js']
		},

		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'src/<%= pkg.name %>.js',
				dest: 'build/<%= pkg.name %>.min.js'
			},
			scripts: {
				expand: true,
				cwd: 'scripts/',
				src: '**.js',
				dest: 'build/',
				ext: '.min.js'
			}
		},

		babel: {
			options: {
				sourceMap: true,
				stage: 0,
				optional: ['runtime'],
				presets: ['babel-preset-es2015']
			},
			dist: {
				files: [
								// Node source
					{
						expand: true,// Enable dynamic expansion.
						cwd: 'js_practice/',	// Src matches are relative to this path.
						src: ['es6/*.js'],
						dest: 'dist/-<%= grunt.template.today("yyyy-mm-dd") %>.js', // Destination path prefix. File will be copied to the dist directory with today’s data in the filename.
						ext: '.js'	 // Dest filepaths will have this extension.
					},

								// Browser source
					{
						expand: true,// Enable dynamic expansion.
						cwd: 'js_practice/',	// Src matches are relative to this path.
						src: ['public/es6/*.js'],
						dest: 'public/dist/-<%= grunt.template.today("yyyy-mm-dd") %>.js', // Destination path prefix. File will be copied to the dist directory with today’s data in the filename.
						ext: '.js'	 // Dest filepaths will have this extension.
					}
				]
			}
		},
/*
			browserify: {
				 dist: {
					 options: {
						 transform: [["babelify", { "stage": 0 }]]
					 },
					 files: {
						 "build/bundle.js": "src/main.js"
					 }
				 }
			 },
*/

		watch: {
			scripts: {
				files: ['**/*.js'],
				tasks: ['jshint']
			},

			styles: {
				files: 'styles/**.less',
				task: 'less:styles'
			}
		}

	});

	/*	grunt.loadNpmTasks('grunt-contrib-jshint');*/
	grunt.loadNpmTasks('grunt-contrib-eslint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
/*	grunt.loadNpmTasks('grunt-browserify');*/
	grunt.loadNpmTasks('grunt-babel');

// Default task.
	grunt.registerTask('default', ['eslint', 'babel']);
	grunt.registerTask('build', [ 'uglify']);

};
