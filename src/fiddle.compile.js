var webpack = require("webpack")
var process = require('process')
var path    = require('path')


function conf(file, output_dir, output_file) {
  return {
    entry: ['babel-polyfill', file],
    
    output: {
      path: output_dir,
      filename : output_file
    },
    plugins: [
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
        }
      ]
    }
  }

}


module.exports = function(file, output_dir, output_file, cb) {
  var compiler = webpack(conf(file, output_dir, output_file))
  
  try {
    compiler.run(function (err, state) {
      

      var jsonStats = state.toJson();

      if (jsonStats.errors.length > 0) {
        // console.log(jsonStats.errors)
        cb(jsonStats.errors);
      }
      // if(jsonStats.warnings.length > 0)
      //   (jsonStats.warnings);
      // successfullyCompiled();
      cb()
    })
  }catch(ex) {
    
  }

}
