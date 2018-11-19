const path = require('path');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
	mode: 'development', //add 'production' when deploy
    // watch: true,
	entry: {
        global: glob.sync('./src/components/**/*.js'),
        styles: glob.sync('./src/components/_base/_grid.css'),
		// index: glob.sync('./public/js/manual/index/*.js'),
		// products: glob.sync('./public/js/manual/products/*.js'),
		// product: glob.sync('./public/js/manual/product/*.js')
    },
	output: {
		path: __dirname + '/dist/js/',
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
		  {
			test: /\.m?js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
			  loader: 'babel-loader',
			  options: {
				presets: ['@babel/preset-env']
			  }
			}
          },
          {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader"
            ]
          }
		]
	  },
	plugins: [
		new MiniCssExtractPlugin({
            filename: '[name].bundle.css'
        })
	]
};