module.exports = {
  context: __dirname,
  entry: "./src/root.tsx",
  output: {
    path: "./www/js",
    filename: "main.js"
  },
  resolve: {
    extensions: ["", ".tsx", ".ts", ".js"]
  },
  devtool: "source-map",
  module: {
    preLoaders: [{
      test: /\.(ts|tsx)$/,
      loader: "tslint"
    }],
    loaders: [{
      loader: "babel?cacheDirectory!ts-loader",
      exclude: /(node_modules)/,
      test: /\.(ts|tsx)$/
    }],
    exprContextRegExp: /$^/,
    exprContextCritical: false
  }
};
