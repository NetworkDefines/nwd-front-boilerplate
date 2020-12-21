const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    publicPath: '/',
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: { minimizer: [] },
};
