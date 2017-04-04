var config = {
  main: {
    src: './app/',
    dest: './'
  },
  sass: {
    src: 'sass/style.sass',
    dest: 'css',
    error: 'Error Running SASS'
  },
  nunjucks: {
    src: 'pages/**/*.*',
    error: 'Error Running Nunjucks',
    template: 'templates/',
    watch: 'templates/**/*',
    data: 'data/generated/data.json'
  }
};

// Exporting config
module.exports = config;
