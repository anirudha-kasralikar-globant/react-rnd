// @flow

// Paths will export some path variables that we'll
// use in other Webpack config and server files

const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  appAssets: resolveApp('src/assets'),
  appBuild: resolveApp('build'),
  appConfig: resolveApp('config'),
  appHtml: resolveApp('src/index.html'),
  appIndexJs: resolveApp('src/index.js'),
  appSrc: resolveApp('src'),
  appPublic: resolveApp('public'),
  appTemp: resolveApp('var'),
  webpackBundleAnalyzerReportFile: resolveApp('var/WebpackBundleAnalyzerReport.html'),
};
