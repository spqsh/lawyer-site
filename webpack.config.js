const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CssnanoPlugin = require("cssnano-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      favicon: "./src/static/favicon.png",
      template: "./src/index.html",
      minify: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(ts|js)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            unsafe: true,
            inline: true,
            passes: 2,
            keep_fargs: false,
          },
          output: {
            beautify: false,
          },
          mangle: true,
        },
      }),
      new CssnanoPlugin(),
    ],
  },
};
