// entry -> output

const path = require('path');
const { forwardRef } = require('react');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  const isProd = env === 'production';
  const CSSExtract = new MiniCssExtractPlugin({ filename: 'styles.css' });

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
        use: [ MiniCssExtractPlugin.loader, 
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
      ]
    },
    plugins: [
      CSSExtract
    ],
    devtool: isProd ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  }
};