const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    // url 변경 시 오류 나는 것을 막아줌
    publicPath: "/",
    // 번들을 추출하기 전에 기존 build 디렉토리를 비워준다.
    // 이전에 CleanWebpackPlugin을 통해서 비웠지만, webpack v5이후로 이렇게 설정 할 수 있다.
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "build"),
    },
    // url 변경 시 오류 나는 것을 막아줌
    historyApiFallback: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /[\.js]$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    // 이 옵션 없이 사용하면 빌드 시 개발한 것이 적용되지 않는다. 기존에 만들어둔 파일을 기반으로 html을 만들어준다.
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new Dotenv(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    },
    extensions: [".ts", ".js"],
  },
};
