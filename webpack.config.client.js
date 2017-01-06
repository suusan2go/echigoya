const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    bundle: [
      !isProduction && 'webpack/hot/dev-server',
      'babel-polyfill',
      `${__dirname}/client/AppRouter.jsx`,
    ].filter(Boolean),
  },
  output: {
    path: `${__dirname}/public/assets`,
    filename: '[name].js',
    publicPath: 'http://localhost:3500/assets/',
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    isProduction && new ExtractTextPlugin('styles.css'),
  ].filter(Boolean),
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loaders: ['babel'],
      },
      {
        test: /global\.(css|scss)/,
        include: [/global/],
        loader: isProduction ? ExtractTextPlugin.extract('style', 'css-loader!less-loader!') : 'style-loader!css-loader!less-loader!',
      },
      {
        test: /\.(scss|css)$/,
        exclude: [/global/],
        loader: isProduction ? ExtractTextPlugin.extract('style', 'css-loader?modules!sass-loader!') : 'style-loader!css-loader?modules!sass-loader!',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?mimetype=image/svg+xml',
      },
      {
        test: /\.woff(\d+)?(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?mimetype=application/font-woff',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?mimetype=application/font-woff',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?mimetype=application/font-woff',
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader?name=[path][name]-[hash].[ext]',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.js.jsx', '.css', '.scss'],
    root: path.resolve(__dirname, 'client'),
  },
  devServer: {
    host: '0.0.0.0',
    headers: { 'Access-Control-Allow-Origin': 'http://localhost:3000', 'Access-Control-Allow-Credentials': 'true' },
  },
};
