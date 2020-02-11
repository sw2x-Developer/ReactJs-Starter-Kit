
const path = require('path');
const webpack = require('webpack')

const VENDOR_LIBS = [
  'redux', 'react-redux', 'react-dom'
]

module.exports = {
  entry: {
    App: './assets/js/App.js',
    vendor: VENDOR_LIBS
  },
  output: { filename: '[name].js',
            path: path.resolve(__dirname, 'public/js') },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [ 'es2015', { modules: false } ],
            'stage-0', 'react'
          ]
        }
      },
      {
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader", options: {
                    sourceMap: true
                }
            }, {
                loader: "sass-loader", options: {
                    sourceMap: true
                }
            }]
        }
    ]
  },
  plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                minChunks: function (module) {
                   // this assumes your vendor imports exist in the node_modules directory
                   return module.context && module.context.indexOf('node_modules') !== -1;
                }
            }),
        ]
};
