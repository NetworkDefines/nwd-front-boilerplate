const path = require('path');
const webpack = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
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
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction ? '[name].[contenthash:8].js' : '[name].js',
      chunkFilename: isProduction ? '[id].[chunkhash:8].js' : '[id].js',
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
      ...(isProduction ? [
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false
        }),
      ] : []),
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
      splitChunks: {
        chunks: 'all',
        minSize: 20000,
        cacheGroups: {
          default: {
            minChunks: 2,
            priority: 2,
            reuseExistingChunk: true,
          },
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: 1,
          },
        },
      },
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
