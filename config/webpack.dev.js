const { merge } = require('webpack-merge')
const common = require('../config/webpack_common.js')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dev_build'
  },
  output: {
    path: path.resolve(__dirname, 'dev_build'),
    clean: true
  }
})
