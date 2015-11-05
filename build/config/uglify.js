module.exports = {
  options: {
    sourceMap: true
  },
  my_target: {
    files: {
      'public/compiled/app.min.js': [
          'public/javascripts/**/*'
        ]
    }
  }
};
