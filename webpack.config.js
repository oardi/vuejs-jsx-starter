const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env, argv) => {

	return {

		context: path.resolve(__dirname, './src'),

		entry: { app: './index.js' },

		output: {
			filename: '[name].[contenthash].bundle.js',
			chunkFilename: '[name].[contenthash].bundle.js',
			path: path.resolve(__dirname, 'dist'),
		},

		devServer: {
			// hot: true
		},

		devtool: "source-map",

		resolve: {
			extensions: ['.js'],
			alias: {
				vue: 'vue/dist/vue.esm.js'
			}
		},

		module: {
			rules: [
				{ test: /\.js$/, loader: ['babel-loader'] },
				{ test: /\.css$/, use: ["style-loader", "css-loader"] },
			]
		},

		plugins: [
			new CleanWebpackPlugin(['dist']),
			new HtmlWebpackPlugin({
				template: "./index.html",
				filename: "index.html",
				chunksSortMode: "manual",
				chunks: ['vendors', 'app'],
			})
		],

		optimization: {
			splitChunks: {
				cacheGroups: {
					commons: { test: /[\\/]node_modules[\\/]/, name: "vendors", chunks: "all" }
				}
			}
		}
	}
};
