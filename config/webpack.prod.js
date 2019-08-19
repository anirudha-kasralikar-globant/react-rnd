// @flow
import { DefinePlugin } from 'webpack';

const merge = require('webpack-merge');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const common = require('./webpack.common.js');
const paths = require('./paths');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, paths.appBuild),
    publicPath: '/',
    filename: '[name].[hash].js',
  },
  plugins: [
    new Dotenv({
      path: './.env.production',
    }),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
});
