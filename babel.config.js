module.exports = function(api) {
	const alias = require('./alias.json');
	api.cache(true);
	return {
		presets: [ 'babel-preset-expo' ],
		plugins: [
			'react-native-reanimated/plugin',
			[
				'module-resolver',
				{
					alias: {
						'@pages': './src/pages',
						'@components': './src/components',
						'@styles': './src/styles',
						'@store': './src/store'
					}
				}
			]
		]
	};
};
