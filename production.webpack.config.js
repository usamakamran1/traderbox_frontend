const path = require('path');

module.exports = {
  mode: "production",
  entry: "../App.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "/assets/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "./src")
        ],
        exclude: [
          path.resolve(__dirname, "node_modules"),
        ],
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    filename: "main.js",
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "./src")
    ],
    extensions: [".js", ".json", ".jsx", ".css"],
  },
}
