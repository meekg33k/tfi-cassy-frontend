var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require("path");

module.exports = {
  //context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : "source-map",
  entry: "./public/client.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: ['babel-loader'],
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      }
    ]
  },
  output: {
    path: __dirname + "/public/assets/js/",
    filename: "client.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
	new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
  resolve: {
    root: __dirname,
    alias: {
      NavAdmin: 'public/components/NavAdmin.js'
    },
    extensions: ['', '.js', '.jsx']
  },
};
