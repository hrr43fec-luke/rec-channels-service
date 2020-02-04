const path = require('path');

module.exports = {
  entry: './client/src/index.jsx',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'main_bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],

        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
};
