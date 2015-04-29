'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.initConfig({
    jshint: {
      dev: {
        src: ['Gruntfile.js', 'greet*.js', 'test/**/*.js']
      },

      options: {
        jshintrc: '.jshintrc'
      },
    },
    watch: {
      files: ['**/*.js'],
      tasks: ['jshint'],
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('test', ['jshint:dev']);
  grunt.registerTask('default', ['test']);
};
