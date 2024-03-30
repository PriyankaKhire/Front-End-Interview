const path = require('path')
const webpack = require('webpack')
module.exports = { 
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.bundle.js'
  },  
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
	static: {
      directory: path.join(__dirname, "./")
    },
    port: 3000
  },  
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'}  
    ]   
  }
}