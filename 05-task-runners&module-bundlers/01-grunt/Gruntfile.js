"use strict";
module.exports = function(grunt) {
  grunt.initConfig({
    babel: {
      compile: {
        options: {
          sourceMap: true,
          presets: ["env"],
        },
        files: [{
			expand: true,
			//cwd: '<%= yeoman.server %>',
			src: [
			  'src/**/*.js'
			],
			dest: 'dist'
		  }],
      },
    },
    nodeunit: {
      tasks: ["test/test.js"],
    },
    clean: {
      test: ["dist/**"],
	},
	copy: {
		main: {
			expand: true,
			//cwd: '<%= yeoman.client %>',
			dest: 'dist/',
			src: ['src/**']
		  }
	}
  });

  //grunt.loadTasks("tasks");
  grunt.loadNpmTasks("grunt-babel");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-nodeunit");
  grunt.loadNpmTasks("grunt-contrib-copy");
  //grunt.registerTask("build", ["clean", "babel", "nodeunit", "clean"]);
  grunt.registerTask("build", ["clean", "copy", "babel"]);
};