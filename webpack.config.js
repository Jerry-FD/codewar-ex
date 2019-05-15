const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: path.resolve(__dirname, 'js/index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html'
		})
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
					}
				],
				include: path.resolve(__dirname, 'js'),
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader"
					}
				]
			}
		]
	},
	devServer: {
		port: '9999',
		host: 'localhost'
	}
}
