module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
		"plugin:tailwindcss/recommended",
	],
	overrides: [],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint", "prettier"],
	rules: {
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"react/react-in-jsx-scope": 0,
	},
	ignorePatterns: ["*.ts", "*.cjs", "*.js", "*.css", "*.html"],
};
