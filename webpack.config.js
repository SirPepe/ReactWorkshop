var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname,
  entry: {
    js: "./src/root.tsx",
    css: "./src/scss/main.scss"
  },
  output: {
    path: "./www/js",
    filename: "main.js"
  },
  resolve: {
    extensions: ["", ".tsx", ".ts", ".js", ".scss", ".css"]
  },
  devtool: "source-map",
  module: {
    preLoaders: [{
      exclude: /(node_modules)/,
      loader: "tslint",
      test: /\.(ts|tsx)$/,
    }],
    loaders: [{
      loader: "babel?cacheDirectory!ts-loader",
      exclude: /(node_modules)/,
      test: /\.(ts|tsx)$/
    }, {
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader"),
      test: /\.scss$/
    }],
    exprContextRegExp: /$^/,
    exprContextCritical: false
  },
  sassLoader: {
    includePaths: [ path.resolve(__dirname, "node_modules/foundation-sites/scss") ]
  },
  plugins: [
    new ExtractTextPlugin("../css/main.css")
  ],
};
