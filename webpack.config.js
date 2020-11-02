// entry -> output

const path = require('path');
const { forwardRef } = require('react');

module.exports = (env) => {
  const isProd = env === 'production';

  return {
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
    devtool: isProd ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  }
};