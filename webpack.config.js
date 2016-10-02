var path = require('path');
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'build/assets/'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_module/,
      loader: 'babel-loader'
    }]
  },
  devServer: {
    contentBase: './build',
    inline: true
  }
};