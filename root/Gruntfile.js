module.exports = function(grunt) {

	//grunt stuff goes here

	grunt.initConfig({

		//package info

		pkg: grunt.file.readJSON('package.json'),

		//our JSHint options

		jshint: {

			all: ['js/*.js', 'Gruntfile.js'] //files to lintl

		},

		//our concat options

		concat: {

			options: {

				separator: ';' //separates scripts

			},

			dist: {

				// src: ['js/*.js', 'js/**/*.js'], //using mini match for the scripts to concatenate

				src: ['js/*.js'],

				//src: ['*.js'],

				dest: 'js/final.js' //where to output the script

			}

		},



		//our uglify options

		uglify: {

			options: {

				banner: '/*! Project: <%= pkg.name %> ' + 

					'Date: <%= grunt.template.today("mm-dd-yyyy") %> */\n'

			},

			js: {

				files: {

					//'js/destination': ['js/source']l

					//'js/add-min.js': ['js/add.js'], //save over the newly created script

					//'js/subtract-min.js': ['js/subtract.js']

					'dest/final-min.js': ['js/final.js']
				}
			}
		}
	});



	//load the tasks

	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.loadNpmTasks('grunt-contrib-uglify');

	//grunt.loadNpmTasks)'grunt-contrib-cssmin');



	//default tasks to run

	grunt.registerTask('default', ['jshint', 'concat', 'uglify']);

	grunt.registerTask('deploy', ['uglify']);

	grunt.registerTask('sniff', ['jshint']);



	grunt.registerTask('scratch', function(name){ //grunt scratch:folderName

		grunt.log.writeln('Scratching...');

		var wxdesk = name + '/wxdesk';

		var vendor = name + '/vendor';

		//generate folders

		grunt.file.mkdir(name);

		grunt.file.mkdir(wxdesk);

		grunt.file.mkdir(vendor);

		//generate files

		grunt.file.write(name +'/main.js');

		grunt.file.write(name +'/index.html');

		grunt.file.write(name +'/main.css');

		grunt.log.writeln('Scratching complete!');

	});

};
