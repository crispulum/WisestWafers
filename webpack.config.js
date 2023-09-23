const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  mode: 'development',
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.html$/, // Add this rule to handle HTML files
        use: ['html-loader'],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Pondr',
    template: './client/index.html'
  }), new CleanWebpackPlugin(), new MiniCssExtractPlugin()],
  devServer: {
    static: {
      publicPath: '/',
      directory: path.resolve(__dirname, 'build'),
    },
    port: 8080,
    host: 'localhost',
    proxy: {
      '/': {
        target: 'http://localhost:3000',
        secure: false
      }
    }
  },

}