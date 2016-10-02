var path = require('path');
module.exports = {
  entry: {
    app1: './src/app1.js',
    app2: './src/app2.js'
  },
  output: {
    path: path.resolve(__dirname, 'build/assets/'),
    publicPath: '/assets/',
    filename: "[name].bundle.js",
    chunkFilename: "[id].bundle.js"
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