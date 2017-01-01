var webpack = require("webpack")
var process = require('process')
var path    = require('path')

module.exports = {
  entry: {
    'react' : ['react', 'react-dom', 'qs', 'url-parse', 'redux', 'react-redux', 'redux-thunk']
  },

  output: {
    path: path.join(__dirname, "dist/js"),
    filename: "[name].js",
    library: "[name]_[hash]"
  },

  plugins : [
    new webpack.DllPlugin({
      // The path to the manifest file which maps between
      // modules included in a bundle and the internal IDs
      // within that bundle
      path: 'dist/js/[name]-manifest.json',
      // The name of the global variable which the library's
      // require function has been assigned to. This must match the
      // output.library option above
      name: '[name]_[hash]',
    })
  ]

}
