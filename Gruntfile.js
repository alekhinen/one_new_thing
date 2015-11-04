module.exports = function(grunt) {

  grunt.initConfig({

    // linting
    jshint: require('./build/config/jshint'),

    // whitespace rules
    lintspaces: require('./build/config/lintspaces'),

    // Uglify
    uglify: require('./build/config/uglify'),

    // CSS minification
    cssmin: require('./build/config/cssmin'),

    // file watching
    watch: require('./build/config/watch')

  });

  // load npm plugins (all dependencies that match /^grunt/)
  require('load-grunt-tasks')(grunt);

  // default task
  grunt.registerTask('default', require('./build/tasks/default'));
};
