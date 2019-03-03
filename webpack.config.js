const path = require('path')
const res = require('./res')

module.exports = {
  entry: {
    navbar: './apps/navbar/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(res.DIST, 'assets', 'bundles'),
  },
  module: {
    rules: [
      // Build React and JavaScript code.
      {
        test: /\.(js|jsx)$/,
        use: [{loader: 'babel-loader'}],
        exclude: /node_modules/,
      },
    ],
  },
}
