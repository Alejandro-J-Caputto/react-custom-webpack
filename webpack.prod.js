const path = require("path");
const common = require("./webpack.common");

const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name]/[name].[contenthash].bundle.js",
  },
  optimization: {
    minimizer: [new CssMinimizerWebpackPlugin(), new TerserPlugin()],
  },
  plugins: [new CleanWebpackPlugin()],
});
