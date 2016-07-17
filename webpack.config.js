var configs = module.exports = {
	entry: {
		app: [
			'babel-polyfill',
			'./src/inder.js'
		]
	},
	output: {
		libraryTarget: 'commonjs2',
		path: __dirname + '/lib',
		publicPath: '/lib',
		filename: 'inder.js'
	},
	target: 'node',
	module: {
		loaders: [
			{
				test: /\.js?$/,
				loader: 'babel',
				exclude: /(node_modules|bower_components)/,
				query: {
					presets: [ 'es2015', 'es2017' ]
				}
			},
		]
	}
};
