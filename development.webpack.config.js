const path = require('path');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "main.js",
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src/"),
        loader: "eslint-loader",
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src/"),
        loader: "babel-loader",
      },
    ],
  },
  devServer: {
    compress: true,
    contentBase: "./public/",
    hot: true,
    open: true,
    overlay: true,
    port: 3000,
    publicPath: "/",
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "./src")
    ],
    extensions: [".js", ".json", ".jsx", ".css"],
  },
}
