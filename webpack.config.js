const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

const path = require('path');

const locals = {
  routes: [
    '/',
  ],
};

module.exports = {
  entry: './client/src/index.jsx',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'main_bundle.js',
    libraryTarget: 'umd', // this is super important
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        include: path.join(__dirname, '/src'),
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
        include: path.join(__dirname, '/src'),
        // use: [
        //   'style-loader',
        //   'css-loader',
        // ],
        // loaders: ['style', 'css'],
        // include: `${__dirname}/src`,
      },
    ],
  },
  plugins: [
    new StaticSiteGeneratorPlugin('main', locals.routes),
    new ExtractTextPlugin('styles.css'),
  ],
};

// var locals = {
//   routes: [
//     '/',
//   ]
// }

// module.exports = {
//   entry: './src',
//   output: {
//     path: 'build',
//     filename: 'bundle.js',
//     libraryTarget: 'umd' // this is super important
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.js$/,
//         loader: 'babel',
//         include: __dirname + '/src',
//       },
//       {
//         test: /\.css$/,
//         loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
//         include: __dirname + '/src'
//       }
//     ],
//   },
//   plugins: [
//     new StaticSiteGeneratorPlugin('main', locals.routes),
//     new ExtractTextPlugin("styles.css"),
//   ]
// };
