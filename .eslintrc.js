module.exports = {
	env: {
		es6: true,
    node: true,
    browser: true
	},
	parser: '@typescript-eslint/parser',
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended'
	],
	plugins: ['@typescript-eslint'],
	rules: {
		'no-param-reassign': 'off',
		'max-params': 'off',
		'semi': ['error', 'never'],
		'no-empty': 'off',
		'eol-last': 'error',
		'object-curly-spacing': ['error', 'always'],
		'@typescript-eslint/camelcase': 'off',
		'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: false,
        endOfLine: 'auto',
        spaceBeforeFunctionParen: false,
        trailingComma: 'none',
        printWidth: 100
      }
    ]
	},
	ignorePatterns: ['/node_modules']
}
