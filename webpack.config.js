module.exports = {
  context: __dirname,
  entry: "./src/main.tsx",
  output: {
    path: "./www/js",
    filename: "main.js",
  },
  resolve: {
    extensions: ["", ".tsx", ".ts", ".js"]
  },
  devtool: "source-map",
  module: {
    loaders: [{
      // loader: "babel?cacheDirectory!ts-loader",
      loader: "babel!ts-loader",
      exclude: /(node_modules)/,
      test: /\.(ts|tsx)$/
    }],
    exprContextRegExp: /$^/,
    exprContextCritical: false
  }
};
