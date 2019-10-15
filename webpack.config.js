const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: './js/principal.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'compilado.js'
  },
  devtool: 'true',
  plugins: [
    new webpack.SourceMapDevToolPlugin({})
  ]
}
