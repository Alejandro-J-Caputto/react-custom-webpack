const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor/vendor.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/img/[name].[hash][ext]",
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "css/[name].[contenthash].css" }),
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
};
