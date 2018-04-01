const path = require('path')
const res = require('./res')

module.exports = {
  entry: {
    checkins: './src/apps/checkins/index.js',
    header: './src/apps/header/index.js',
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
        use: [
          { loader: 'babel-loader' },
        ],
        exclude: /node_modules/,
      },
    ],
  },
}