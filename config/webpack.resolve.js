// @flow
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const paths = require('./paths');

module.exports = {
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      Views: path.resolve(paths.appSrc, 'views'),
      State: path.resolve(paths.appSrc, 'state'),
      Utils: path.resolve(paths.appSrc, 'utils'),
      Services: path.resolve(paths.appSrc, 'services'),
      Assets: path.resolve(paths.appSrc, 'assets'),
    },
  },
};
