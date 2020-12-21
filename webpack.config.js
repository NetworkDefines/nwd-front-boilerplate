const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

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
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      title: 'NetwrokDefines - Video & Network Technology Company',
      favicon: 'public/favicon.ico',
      template: path.resolve(__dirname, './public/index.html'),
    }),
  ],
  optimization: { minimizer: [] },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
  devtool: 'inline-source-map'
};
