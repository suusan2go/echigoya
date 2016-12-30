const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: `${__dirname}/client/app.js`,
  output: {
    path: `${__dirname}/public/assets`,
    filename: '[name]-[hash].js'
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loaders: ['babel'],
      },
      {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?mimetype=image/svg+xml',
      },
      {
        test: /\.woff(\d+)?(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?mimetype=application/font-woff',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?mimetype=application/font-woff',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?mimetype=application/font-woff',
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'file-loader?name=[path][name]-[hash].[ext]',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.js.jsx', '.css', '.scss'],
    root: path.resolve(__dirname, 'frontend'),
  },
};
