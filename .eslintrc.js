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
	ignorePatterns: ['*.css', '**/vendor/*.css'],
	rules: {
		quotes: [2, 'single'],
		'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
		'react/react-in-jsx-scope': 0,
		'import/extensions': 0,
		'import/no-unresolved': [0],
		'import/prefer-default-export': 0,
		'react/function-component-definition': 0,
		'arrow-body-style': 0,
		'no-undef': 0,
		'react/jsx-no-useless-fragment': 0,
	},
	settings: {
		'import/ignore': ['.css$', 'node_modules/*'],
	},
}
