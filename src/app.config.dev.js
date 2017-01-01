var webpack = require("webpack")
var process = require('process')
var path    = require('path')

module.exports = {
  devtool :"#source-map",
  entry: ['./app/main.js'],

  output: {
    path: __dirname + "/dist",
    filename: "js/app.js"
  },
  plugins : [
    new webpack.DllReferencePlugin({
      context: process.cwd(),
      manifest: require(__dirname + '/dist/js/react-manifest.json')
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['babel-loader'], // 'babel-loader' is also a legal name to reference
      }, {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
        test : /\.(png|gif|jpg|ico)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'url?limit=100000'
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },

    ]
  },
  resolve : {
    root : path.resolve('./app'),
    extensions: ['', '.js']
  },

}
