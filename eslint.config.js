// import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import vitest from '@vitest/eslint-plugin';
import checkFile from 'eslint-plugin-check-file';
import { importX } from 'eslint-plugin-import-x';
import jsdoc from 'eslint-plugin-jsdoc';
import eslintPluginJsonc from 'eslint-plugin-jsonc';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginSecurity from 'eslint-plugin-security';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sortClassMembers from 'eslint-plugin-sort-class-members';
import tsdoc from 'eslint-plugin-tsdoc';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';
// const compat = new FlatCompat();

export default tseslint.config(
	{
		ignores: [
			'**/googleAnalytics.js',
			'**/__snapshots__/**',
			'**/node_modules/**',
			'**/dist/**',
			'**/build/**',
			'**/coverage/**',
			'**/playwright-report/**',
			'**/test-results/**',
			'**/lighthouse-report/**',
			'.markdownlint-cli2.jsonc',
		],
	},

	eslintPluginUnicorn.configs.recommended,
	importX.flatConfigs.recommended,
	importX.flatConfigs.typescript,
	eslint.configs.recommended,
	pluginSecurity.configs.recommended,
	eslintPluginPrettierRecommended,
	...eslintPluginJsonc.configs['flat/recommended-with-jsonc'],
	...eslintPluginJsonc.configs['flat/prettier'],
	// ...fixupConfigRules(compat.extends('plugin:editorconfig/noconflict')),
	{
		plugins: {
			'simple-import-sort': simpleImportSort,
			'unused-imports': unusedImports,
			'check-file': checkFile,
			'@stylistic': stylistic,
		},

		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.node,
				...globals.serviceworker,
			},

			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
				ecmaFeatures: {
					jsx: true,
				},
			},
		},

		settings: {
			react: {
				pragma: 'React',
				version: 'detect',
			},
		},

		rules: {
			'prettier/prettier': 'error',

			'array-callback-return': [
				'error',
				{
					checkForEach: true,
				},
			],

			'no-await-in-loop': 'error',
			'no-constant-binary-expression': 'error',
			'no-constructor-return': 'error',
			'no-promise-executor-return': 'error',
			'no-self-compare': 'error',
			'no-template-curly-in-string': 'error',
			'no-unmodified-loop-condition': 'error',
			'no-unreachable-loop': 'error',
			'no-unused-private-class-members': 'error',
			'no-use-before-define': [
				'error',
				{
					functions: false,
					classes: true,
					variables: true,
					allowNamedExports: false,
				},
			],
			'require-atomic-updates': 'error',
			'no-lone-blocks': 'error',
			'no-underscore-dangle': 'error',

			// Good Practices
			camelcase: 'error',
			eqeqeq: 'error',
			'new-cap': 'error',
			'no-array-constructor': 'error',
			'no-console': [
				'error',
				{
					allow: ['error', 'info'],
				},
			],
			'no-else-return': [
				'error',
				{
					allowElseIf: false,
				},
			],
			'no-extend-native': 'error',
			'no-lonely-if': 'error',
			'no-param-reassign': 'error',
			'no-return-assign': 'error',
			'no-throw-literal': 'error',
			'no-var': 'error',
			'object-shorthand': 'error',
			'prefer-const': 'error',
			'prefer-rest-params': 'error',
			'prefer-spread': 'error',
			'prefer-template': 'error',
			radix: 'error',
			yoda: 'error',
			'require-await': 'error',

			// Style
			curly: 'error',
			'no-unneeded-ternary': 'error',
			'prefer-arrow-callback': 'error',
			'no-nested-ternary': 'error',
			'max-depth': ['error', 5],
			'no-implicit-coercion': 'error',
			'arrow-body-style': ['error', 'as-needed'],
			'@stylistic/lines-between-class-members': [
				'error',
				{
					enforce: [
						{
							blankLine: 'always',
							prev: 'field',
							next: '*',
						},
						{
							blankLine: 'always',
							prev: '*',
							next: 'field',
						},
						{
							blankLine: 'never',
							prev: 'field',
							next: 'field',
						},
						{
							blankLine: 'always',
							prev: '*',
							next: 'method',
						},
						{
							blankLine: 'always',
							prev: 'method',
							next: '*',
						},
					],
				},
				{
					exceptAfterSingleLine: true,
				},
			],
			'@stylistic/padding-line-between-statements': [
				'error',
				{
					blankLine: 'always',

					prev: [
						'directive',
						'import',
						'cjs-import',
						'export',
						'cjs-export',
						'const',
						'let',
						'var',
						'class',
						'block',
						'block-like',
						'multiline-block-like',
						'function',
						'iife',
						'expression',
						'case',
						'default',
						'interface',
						'type',
					],

					next: '*',
				},
				{
					blankLine: 'always',
					prev: '*',

					next: [
						'import',
						'cjs-import',
						'export',
						'cjs-export',
						'const',
						'let',
						'var',
						'class',
						'block',
						'block-like',
						'multiline-block-like',
						'function',
						'iife',
						'expression',
						'return',
						'interface',
						'type',
					],
				},
				{
					blankLine: 'always',
					prev: 'function',
					next: 'function-overload',
				},
				{
					blankLine: 'any',
					prev: ['const', 'let', 'var'],
					next: ['const', 'let', 'var'],
				},
				{
					blankLine: 'any',
					prev: 'directive',
					next: 'directive',
				},
				{
					blankLine: 'any',
					prev: 'import',
					next: 'import',
				},
				{
					blankLine: 'any',
					prev: 'cjs-import',
					next: 'cjs-import',
				},
				{
					blankLine: 'any',
					prev: 'export',
					next: 'export',
				},
				{
					blankLine: 'any',
					prev: 'cjs-export',
					next: 'cjs-export',
				},
				{
					blankLine: 'any',
					prev: 'expression',
					next: 'expression',
				},
				{
					blankLine: 'never',
					prev: [
						'singleline-const',
						'singleline-let',
						'singleline-var',
					],
					next: [
						'singleline-const',
						'singleline-let',
						'singleline-var',
					],
				},
				{
					blankLine: 'never',
					prev: 'function-overload',
					next: 'function',
				},
				{
					blankLine: 'never',
					prev: 'function-overload',
					next: 'function-overload',
				},
			],

			// Unicorn
			'unicorn/filename-case': [
				'error',
				{
					cases: {
						camelCase: true,
						pascalCase: true,
					},
					ignore: [/\.json$/, /vite-env\.d\.ts$/],
				},
			],

			'unicorn/prevent-abbreviations': [
				'error',
				{
					checkFilenames: false,
				},
			],

			'check-file/folder-naming-convention': [
				'error',
				{
					'./src/*/': 'KEBAB_CASE',
					// './src/components/*/': 'PASCAL_CASE',
					'./src/components/*/components/**': 'PASCAL_CASE',
					'./cypress/**/': 'KEBAB_CASE',
					'./puppeteer/**/': 'KEBAB_CASE',
					'./playwright/**/': 'KEBAB_CASE',
					'./test/**/': 'KEBAB_CASE',
					'./tests/**/': 'KEBAB_CASE',
				},
			],

			'import-x/first': 'error',
			'import-x/newline-after-import': 'error',
			'import-x/no-duplicates': 'error',
			'import-x/no-unresolved': [
				'error',
				{
					ignore: [
						String.raw`^/.*\.(svg|png|jpg|jpeg|gif|ico|webp)$`, // Public folder assets
						String.raw`\?react$`, // SVGR react imports
						String.raw`\?url$`, // Vite URL imports
					],
				},
			],
			'import-x/no-webpack-loader-syntax': 'error',
			'simple-import-sort/exports': 'error',
			'simple-import-sort/imports': 'error',
			'unused-imports/no-unused-imports': 'error',
			'unused-imports/no-unused-vars': [
				'warn',
				{
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					argsIgnorePattern: '^_',
				},
			],
		},
	},

	{
		files: ['**/*.ts', '**/*.mts', '**/*.cts', '**/*.tsx'],
		extends: [
			// eslint-disable-next-line import-x/no-named-as-default-member
			...tseslint.configs.recommendedTypeChecked,
			// eslint-disable-next-line import-x/no-named-as-default-member
			...tseslint.configs.stylistic,
		],
		plugins: {
			tsdoc,
		},

		settings: {
			'import/resolver': {
				typescript: true,
				node: true,
			},
		},

		rules: {
			'unused-imports/no-unused-vars': 'off',
			'tsdoc/syntax': 'warn',
			'@typescript-eslint/no-misused-promises': [
				'error',
				{
					checksVoidReturn: {
						attributes: false,
					},
				},
			],
			'@typescript-eslint/consistent-type-exports': 'error',
			'@typescript-eslint/consistent-type-imports': 'error',
			'@typescript-eslint/no-confusing-non-null-assertion': 'error',
			'@typescript-eslint/explicit-module-boundary-types': 'error',
			'@typescript-eslint/explicit-function-return-type': 'error',
			'@typescript-eslint/no-non-null-assertion': 'error',
			'@typescript-eslint/consistent-type-definitions': 'error',
			'@typescript-eslint/no-unnecessary-condition': 'error',
			'@typescript-eslint/no-useless-constructor': 'error',
			'@typescript-eslint/prefer-readonly': 'error',
			'@typescript-eslint/switch-exhaustiveness-check': 'error',
			'@typescript-eslint/prefer-for-of': 'error',
			'@typescript-eslint/prefer-nullish-coalescing': 'error',
			'@typescript-eslint/no-unnecessary-boolean-literal-compare':
				'error',
			'@typescript-eslint/promise-function-async': [
				'error',
				{
					checkArrowFunctions: false,
				},
			],
			'@typescript-eslint/no-confusing-void-expression': [
				'error',
				{
					ignoreArrowShorthand: true,
				},
			],
			'@typescript-eslint/naming-convention': [
				'error',
				{
					selector: 'class',
					format: ['PascalCase'],
				},
				{
					selector: ['variable'],
					types: ['boolean'],
					format: ['PascalCase', 'UPPER_CASE'],

					prefix: [
						'is',
						'should',
						'has',
						'can',
						'did',
						'will',
						'IS_',
						'SHOULD_',
						'HAS_',
						'CAN_',
						'DID_',
						'WILL_',
					],
				},
				{
					selector: 'function',
					format: ['camelCase', 'PascalCase'],
				},
				{
					selector: 'typeLike',
					format: ['PascalCase'],
				},
			],
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					args: 'all',
					argsIgnorePattern: '^_',
					caughtErrors: 'all',
					caughtErrorsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					ignoreRestSiblings: true,
				},
			],
			'@typescript-eslint/member-ordering': [
				'error',
				{
					default: [
						// Index signature for interfaces
						'signature',
						'call-signature',

						// Fields o variables
						'public-instance-field',
						'protected-instance-field',
						'private-instance-field',
						'#private-instance-field',

						'public-static-field',
						'protected-static-field',
						'private-static-field',
						'#private-static-field',

						'public-decorated-field',
						'protected-decorated-field',
						'private-decorated-field',

						'public-abstract-field',
						'protected-abstract-field',

						'public-field',
						'protected-field',
						'private-field',
						'#private-field',

						'instance-field',
						'static-field',
						'decorated-field',
						'abstract-field',

						'field',

						// Static initialization
						'static-initialization',

						// Constructors
						'public-constructor',
						'protected-constructor',
						'private-constructor',

						'constructor',

						// Methods
						'public-instance-method',
						'protected-instance-method',
						'private-instance-method',
						'#private-instance-method',
						'public-static-method',
						'protected-static-method',
						'private-static-method',
						'#private-static-method',
						'public-decorated-method',
						'protected-decorated-method',
						'private-decorated-method',
						'public-abstract-method',
						'protected-abstract-method',
						'public-method',
						'protected-method',
						'private-method',
						'#private-method',
						'instance-method',
						'static-method',
						'decorated-method',
						'abstract-method',

						'method',

						// Getters
						'public-instance-get',
						'protected-instance-get',
						'private-instance-get',
						'#private-instance-get',
						'public-static-get',
						'protected-static-get',
						'private-static-get',
						'#private-static-get',
						'public-decorated-get',
						'protected-decorated-get',
						'private-decorated-get',
						'public-abstract-get',
						'protected-abstract-get',
						'public-get',
						'protected-get',
						'private-get',
						'#private-get',
						'instance-get',
						'static-get',
						'decorated-get',
						'abstract-get',

						'get',

						// Setters
						'public-instance-set',
						'protected-instance-set',
						'private-instance-set',
						'#private-instance-set',

						'public-static-set',
						'protected-static-set',
						'private-static-set',
						'#private-static-set',

						'public-decorated-set',
						'protected-decorated-set',
						'private-decorated-set',

						'public-abstract-set',
						'protected-abstract-set',

						'public-set',
						'protected-set',
						'private-set',
						'#private-set',

						'instance-set',
						'static-set',
						'decorated-set',
						'abstract-set',

						'set',
					],
				},
			],
		},
	},

	{
		...jsdoc.configs['flat/recommended'],
		...sortClassMembers.configs['flat/recommended'],
		files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
		rules: {
			'sort-class-members/sort-class-members': [
				'error',
				{
					order: [
						'[properties]',
						'[conventional-private-properties]',
						'[static-properties]',
						'constructor',
						'[methods]',
						'[conventional-private-methods]',
						'[static-methods]',
					],

					accessorPairPositioning: 'getThenSet',
				},
			],
		},
	},
	{
		// ...testingLibrary.configs['flat/react'],
		files: ['tests/**'],
		ignores: ['tests/e2e/**'],
		plugins: { vitest },
		rules: {
			...vitest.configs.recommended.rules,
			'@typescript-eslint/unbound-method': 'off',
			'vitest/prefer-equality-matcher': 'error',
			'vitest/prefer-comparison-matcher': 'error',
			'vitest/prefer-hooks-in-order': 'error',
			'vitest/prefer-hooks-on-top': 'error',
			'vitest/prefer-strict-equal': 'error',
			'vitest/prefer-to-be': 'error',
			'vitest/prefer-to-contain': 'error',
			'vitest/prefer-to-have-length': 'error',
			'vitest/no-alias-methods': 'error',
			'vitest/no-conditional-expect': 'error',
			'vitest/no-disabled-tests': 'warn',
			'vitest/no-done-callback': 'error',
			'vitest/no-focused-tests': 'error',
			'vitest/no-interpolation-in-snapshots': 'error',
			'vitest/no-mocks-import': 'error',
			'vitest/no-standalone-expect': 'error',
			'vitest/no-test-prefixes': 'error',
		},
	},
	// ...fixupConfigRules(compat.extends('plugin:jest-dom/recommended')),
);
