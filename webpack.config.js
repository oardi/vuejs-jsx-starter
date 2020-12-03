const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {

	return {

		context: path.resolve(__dirname, './src'),

		entry: { app: './index.jsx' },

		output: {
			filename: '[name].[fullhash].bundle.js',
			chunkFilename: '[name].[fullhash].bundle.js',
			path: path.resolve(__dirname, 'dist')
		},

		devServer: {
			open: true,
			hot: true
		},

		resolve: {
			extensions: ['.js', '.jsx'],
			alias: {
				vue: 'vue/dist/vue.esm.js'
			}
		},

		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader'
				},
				{
					test: /\.s[ac]ss$/i,
					use: [
						MiniCssExtractPlugin.loader,
						"css-loader",
						"sass-loader"
					]
				}
			]
		},

		plugins: [
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				template: "./index.html",
				title: 'Vue JSX Template',
				filename: "index.html",
				chunksSortMode: "manual",
				chunks: ['vendors', 'app'],
			}),
			new MiniCssExtractPlugin({
				filename: "style.css",
				chunkFilename: "style.css"
			})
		],

		optimization: {
			minimize: true,
			minimizer: [new TerserPlugin()],
			splitChunks: {
				cacheGroups: {
					commons: { test: /[\\/]node_modules[\\/]/, name: 'vendors', chunks: 'all' }
				}
			}
		}
	}
};
