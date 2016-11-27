const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  module: {
    loaders: [
      {
        test: /source\/assets\/javascripts\/.*\.js$/,
        exclude: /node_modules|\.tmp|vendor/,
        loader: 'babel-loader',
      },
      {
        test: /source\/stylesheets\/.*\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader!sass-loader?sourceMap&includePaths[]=' +__dirname + '/node_modules',
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('site.css'),
  ],
  entry: {
    site: './source/javascripts/entry.js',
    styles: './source/stylesheets/main.scss',
  },
  output: {
    path: __dirname + '/.tmp/dist',
    filename: 'javascripts/[name].js',
  },
};
