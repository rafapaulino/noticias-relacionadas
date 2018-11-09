/*global module:false*/
module.exports = function(grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        cssmin: {
			target: {
				files: {
					'css/noticias-relacionadas.min.css': [
						'css/noticias-relacionadas.css'
					]
				}
			}
        },
        uglify: {
            target: {
                files: {
                    'js/noticias-relacionadas.min.js': [
                        'js/noticias-relacionadas.js'
                    ]
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task.
    grunt.registerTask('default', ['cssmin','uglify']);

};
