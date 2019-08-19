// @flow
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  plugins: [
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
      ignoreOrder: false,
    }),
    new HtmlWebpackPlugin({
      template: require('html-webpack-template'),
      inject: false,
      appMountId: 'app',
      appMountHtmlSnippet: '<noscript>You need to enable JavaScript to run this app.</noscript>',
      title: 'GitHub Clone',
      hash: true,
      showErrors: true,
      cache: false,
      meta: [
        {
          name: 'description',
          content: 'A better default template for html-webpack-plugin.',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        },
        {
          name: 'theme-color',
          content: '#000000',
        },
      ],
      links: [
        {
          href: '/favicon.ico',
          rel: 'shortcut icon',
        },
        {
          href: '/manifest.json',
          rel: 'manifest',
        },
      ],
    }),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
    new WebpackMd5Hash(),
    new CleanWebpackPlugin(),
    new CopyPlugin([
      { from: './public/.htaccess' },
      { from: './public/favicon.ico' },
      { from: './public/manifest.json' },
    ]),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),

  ],
};
