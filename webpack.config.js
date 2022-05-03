const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // or production 
  entry: { 
      main: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: { 
    static: path.resolve(__dirname, 'dist'),
    port: 5001,
    open: true,
    hot: true,
    }, 
    
  module: { 
        rules: [
            { test: /\.css$/, use:['style-loader', 'css-loader']}
        ]
    },
    plugins: [ 
      new HtmlWebpackPlugin({ 
          title: 'Just a Demo',
          filename: 'index.html',
          template: path.resolve(__dirname, 'src/temp.html')
        }),
    ],
//loaders


  optimization: { 
      runtimeChunk: 'single',
  },

};