// @flow
const merge = require('webpack-merge');

const moduleRule = require('./webpack.module.rules');
const plugins = require('./webpack.plugins');
const optimizations = require('./webpack.optimizations');
const resolve = require('./webpack.resolve');
const paths = require('./paths');

module.exports = merge(moduleRule, plugins, optimizations, resolve, {
  entry: [paths.appIndexJs],
});
