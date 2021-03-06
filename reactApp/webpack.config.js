var path = require('path');
var config = {
   entry: './main.js',

   output: {
      path: __dirname,
      filename: './build/index.js'
   },

   devServer: {
      inline: true,
      port: 7777
   },

   module: {
      loaders: [ {
         test: /\.jsx?$/,
         exclude: /node_modules/,
         loader: 'babel-loader',

         query: {
            presets: ['es2015', 'react']
         }
      }]
   }

}

module.exports = config;