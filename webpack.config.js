const path = require("path");

module.exports = {
  entry: "./src/js/main.js",
  output: {
    path: path.resolve(__dirname) + "/dist",
    filename: "bundle.js",
    publicPath: "/", // For urls
  },
  devServer: {
    inline: true,
    contentBase: "./dist",
    historyApiFallback: true,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react"],
        }
      }
    ]
  }
};