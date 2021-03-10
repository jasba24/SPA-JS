const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")


module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "main.js"
	},
	resolve: {
		extensions: [".js"],
	},
	mode: "development",
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				}
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader,
						"css-loader",
				]
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
				inject: true,
				template: "./public/index.html",
				filename: "./index.html",
			}),
		new MiniCssExtractPlugin(),
	],
	devServer: {
		contentBase: path.join("__dirname", "dist"),
		compress: true,
		historyApiFallback: true,
		port: 3005,
	},
}