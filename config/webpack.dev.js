// @flow

const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const Visualizer = require('webpack-visualizer-plugin');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const common = require('./webpack.common.js');
const paths = require('./paths');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: paths.appBuild,
    historyApiFallback: true,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  output: {
    path: path.resolve(__dirname, paths.appBuild),
    publicPath: '/',
    filename: '[name].js',
  },
  plugins: [
    new Dotenv({
      path: paths.appConfig.concat('/.env.development'),
    }),
    new Visualizer(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new WebpackBundleAnalyzer({
      analyzerMode: 'static',
      reportFilename: paths.webpackBundleAnalyzerReportFile,
      openAnalyzer: false,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
});
