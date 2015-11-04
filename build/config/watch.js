module.exports = {
  css: {
    files: ['public/stylesheets/**/*'],
    tasks: ['lintspaces', 'cssmin']
  },
  js: {
    files: ['public/javascripts/**/*'],
    tasks: ['jshint', 'uglify']
  }
};
