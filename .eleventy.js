module.exports = function(config) {

  // Copy static assets directly to site output dir
  config.addPassthroughCopy({'src/assets/**/*' : '/'});

  return {
    dir: {
      input: 'src/site/',
      output: 'dist/',
    }
  }
};
