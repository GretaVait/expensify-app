// entry -> output

const path = require('path');
const { forwardRef } = require('react');

module.exports = {
  entry: './public/src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  //loader
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    },
    {
      test: /\.sass$|\.css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};