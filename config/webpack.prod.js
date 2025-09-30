const { merge } = require('webpack-merge')
const common = require('../config/webpack_common.js')

module.exports = merge(common, {
  mode: 'production'
})
