var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require("path");

module.exports = {
  //context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : "source-map",
  entry: "./public/client.js",
  devServer: {
	  
  },
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
    path: path.resolve(__dirname, "public",
    filename: "client.min.js",
  	publicPath: "/public/",
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    root: __dirname,
    alias: {
      NavAdmin: 'public/components/NavAdmin.js'
    },
    extensions: ['', '.js', '.jsx']
  },
};
