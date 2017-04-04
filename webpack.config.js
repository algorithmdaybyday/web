var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var loaders = [
    { test: /\.html$/, loader: 'html' },
    { test: /\.vue$/, loader: 'vue' },
    { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
    { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
];

var config = {
  entry: {
      bundle: './src/main.js',
      vendor: [
        'vue', 'vue-router',
      ],
    },
  output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'js/[name].[hash:8].js',
    },
  resolve: {
      modulesDirectories: ['node_modules'],
      extensions: ['', '.js', '.vue', '.css'],
      alias: {
        vue: 'vue/dist/vue.min.js',
        'vue-router': 'vue-router/dist/vue-router.min.js',
      },
    },
  babel: {
      presets: ['es2015', 'stage-0'],
      plugins: ['transform-runtime'],
    },
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './public/index.html',
      }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
      loaders: loaders,
    },
  devServer: {
      contentBase: './public/',
      historyApiFallback: {
          verbose: true,
        },
      hot: true,
      inline: true,
      progress: true,
      host: '0.0.0.0',
      port: '8085',
    },
};

module.exports = config;
