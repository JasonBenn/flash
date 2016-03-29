var webpack = require('webpack')

module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }, {
        test: /\.scss/,
        loader: 'style-loader!css-loader'
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },

  entry: [
    'babel-polyfill',
    'webpack/hot/dev-server',
    './src/index.js'
  ],

  output: {
    path: "./build",
    publicPath: "/assets/", // Files in build/ are exposed to index.html at assets/.
    filename: "bundle.js"
  },

  devServer: {
    proxy: {
      '/api/*': 'http://localhost:8000/',
      headers: { "Access-Control-Allow-Origin": "*" }
    },
    historyApiFallback: true, // history fallthrough lets React Router handle routing
    noInfo: true, // makes webpack less verbose
    hot: true,
    inline: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  node: {
    fs: 'empty'
  },

  devtool: 'cheap-module-eval-source-map'

};
