const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    publicPath: '/',
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  optimization: { minimizer: [] },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
  devtool: 'inline-source-map'
};
