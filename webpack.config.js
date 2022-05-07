const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // or production 
  entry: { 
      main: path.resolve(__dirname, 'src/index.js'),
      template: path.resolve(__dirname, 'src/temp.html')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: '[name][ext]',
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: { 
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    open: true,
    hot: true,
    }, 
    
  module: { 
        rules: [
            { test: /\.css$/, use:['style-loader', 'css-loader']},
            { test: /\.html$/i, loader: "html-loader"},
            { test: /\.(svg|ico|png|jpg|jpeg|webp|gif)$/, 
                type:'asset/resource'
             },
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