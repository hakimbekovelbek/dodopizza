module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'prettier',
		'plugin:react/jsx-runtime',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		quotes: ['warning', 'single'],
		'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
		'react/react-in-jsx-scope': 0,
	},
	'jsx-runtime': {
		plugins: ['react'],
		parserOptions: {
			ecmaFeatures: {
				jsx: true,
			},
			jsxPragma: null,
		},
		rules: {
			'react/react-in-jsx-scope': 0,
			'react/jsx-uses-react': 0,
		},
	},
}
