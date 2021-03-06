﻿module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			cssbuild: {
				src: ["css/*.css"],
				dest: "dist/<%= pkg.name %>.css"
			}
		},
		cssmin: {
			options: {
				banner: '/*!\n' +
					' * <%= pkg.name %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
					' * Copyright 2015-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
					' */\n',
				beautify: {
					ascii_only: true
				}
			},
			build: {
				files: [{
					"dist/<%= pkg.name %>.min.css": ['dist/<%= pkg.name %>.css']
				}]
			}
		},
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default', ['concat', 'cssmin']);
}
