const path = require('path');
const webpack = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = ({ NODE_ENV }) => {
  const isProduction = NODE_ENV === 'production';
  const isDevelopment = NODE_ENV === 'development';

  const envPath = isProduction
    ? '.env'
    : isDevelopment
    ? '.env.dev'
    : '.env.local';

  const envs = require('dotenv').config({
    path: path.resolve(__dirname, envPath),
  }).parsed;

  return {
    mode: isProduction ? 'production' : 'development',
    entry: './src/index.tsx',
    output: {
      publicPath: '/',
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      plugins: [
        new TsconfigPathsPlugin({
          configFile: path.resolve(__dirname, 'tsconfig.json'),
        }),
      ],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2|pdf)$/i,
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
        {
          test: /\.mp4$/,
          use: 'file-loader?name=videos/[name].[ext]',
        },
      ],
    },
    plugins: [
      new webpack.EnvironmentPlugin({ ...envs }),
      new CleanWebpackPlugin(),
      new HTMLWebpackPlugin({
        filename: 'index.html',
        title: 'NetwrokDefines - Video & Network Technology Company',
        favicon: 'public/favicon.ico',
        template: path.resolve(__dirname, './public/index.html'),
      }),
    ],
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            mangle: true,
            output: {
              beautify: true,
            },
          },
        }),
      ],
    },
    devServer: isProduction
      ? undefined
      : {
          contentBase: path.join(__dirname, 'dist'),
          port: 3000,
          hot: true,
          historyApiFallback: true,
        },
    devtool: 'inline-source-map',
  };
};
