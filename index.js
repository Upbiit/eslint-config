module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:@angular-eslint/recommended',
    'plugin:@angular-eslint/template/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2024,
    sourceType: 'module',
    project: true,
    tsconfigRootDir: process.cwd(),
  },
  plugins: [
    '@typescript-eslint',
    '@angular-eslint',
    'jest',
    'prettier',
  ],
  env: {
    node: true,
    es2024: true,
    jest: true,
  },
  rules: {
    // ============================================
    // PRETTIER INTEGRATION
    // ============================================
    'prettier/prettier': ['error', {
      singleQuote: true,
      trailingComma: 'all',
      printWidth: 125,
      tabWidth: 2,
      useTabs: false,
      semi: true,
      arrowParens: 'always',
    }],

    // ============================================
    // TYPESCRIPT-ESLINT RULES
    // ============================================

    // Require arrow function parameters to be wrapped in parentheses
    '@typescript-eslint/arrow-parens': ['error', 'always'],

    // Explicit return types
    '@typescript-eslint/explicit-function-return-types': [
      'error',
      {
        allowExpressions: false,
        allowTypedFunctionExpressions: false,
        allowHigherOrderFunctions: false,
        allowDirectConstAssertionInline: false,
      },
    ],

    // Forbid explicit `any` type usage
    '@typescript-eslint/no-explicit-any': 'error',

    // Forbid implicit `any`
    '@typescript-eslint/no-implicit-any-catch': 'error',

    // Strict null checks
    '@typescript-eslint/strict-boolean-expressions': [
      'error',
      {
        allowString: false,
        allowNumber: false,
        allowNullableObject: false,
      },
    ],

    // Require explicit type annotations for class members
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
        overrides: {
          constructors: 'no-public',
        },
      },
    ],

    // Enforce naming conventions
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'function',
        format: ['camelCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'enumMember',
        format: ['UPPER_CASE'],
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
    ],

    // Forbid non-null assertions (but allow them - user chose A)
    '@typescript-eslint/no-non-null-assertion': 'off',

    // Require consistent type definitions
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

    // Forbid explicit type when it can be inferred
    '@typescript-eslint/no-inferrable-types': 'error',

    // Require await in async functions
    '@typescript-eslint/require-await': 'error',

    // No unused variables
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],

    // ============================================
    // GENERAL ESLINT RULES
    // ============================================

    // Forbid var
    'no-var': 'error',

    // Prefer const
    'prefer-const': 'error',

    // Require const/let instead of var
    'no-undef': 'error',

    // Cyclomatic complexity
    'complexity': ['error', 10],

    // Max depth (nested if statements)
    'max-depth': ['error', 3],

    // Max params
    'max-params': ['error', 5],

    // Max lines per function
    'max-lines-per-function': [
      'error',
      {
        max: 50,
        skipBlankLines: true,
        skipComments: true,
      },
    ],

    // Strict equality
    'eqeqeq': ['error', 'always', { null: 'ignore' }],

    // No console in production code
    'no-console': ['warn', { allow: ['warn', 'error'] }],

    // No debugger
    'no-debugger': 'error',

    // No empty blocks
    'no-empty': ['error', { allowEmptyCatch: true }],

    // No implicit type coercion
    'no-implicit-coercion': 'error',

    // Require braces for control structures
    'curly': ['error', 'all'],

    // Require consistent brace style
    'brace-style': ['error', '1tbs', { allowSingleLine: false }],

    // Require space after keywords
    'keyword-spacing': 'error',

    // Require space before blocks
    'space-before-blocks': 'error',

    // Enforce consistent spacing around operators
    'space-infix-ops': 'error',

    // Enforce consistent spacing before function parens
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],

    // Prefer arrow callbacks
    'prefer-arrow-callback': 'error',

    // No nested ternaries
    'no-nested-ternary': 'error',

    // No unneeded ternary
    'no-unneeded-ternary': 'error',

    // Require radix in parseInt
    'radix': 'error',

    // Disallow unused expressions
    'no-unused-expressions': 'error',

    // ============================================
    // IMPORT RULES (using built-in ESLint sort)
    // ============================================

    // Sort imports strictly
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSortOrder: 'asc',
        allowSeparatedGroups: true,
      },
    ],

    // ============================================
    // JEST RULES
    // ============================================

    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/valid-expect': 'error',
    'jest/expect-expect': 'error',

    // ============================================
    // ANGULAR RULES
    // ============================================

    '@angular-eslint/directive-selector': [
      'error',
      {
        type: 'attribute',
        prefix: 'app',
        style: 'camelCase',
      },
    ],
    '@angular-eslint/component-selector': [
      'error',
      {
        type: 'element',
        prefix: 'app',
        style: 'kebab-case',
      },
    ],
  },
  overrides: [
    {
      files: ['*.spec.ts', '*.test.ts', '**/*.spec.ts', '**/*.test.ts'],
      rules: {
        '@typescript-eslint/max-lines-per-function': 'off',
        'max-lines-per-function': 'off',
      },
    },
    {
      files: ['*.component.ts'],
      rules: {
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          {
            accessibility: 'explicit',
            overrides: {
              constructors: 'no-public',
              properties: 'off',
              parameterProperties: 'off',
            },
          },
        ],
      },
    },
    {
      files: ['*.steps.ts', '*.feature.ts'],
      rules: {
        '@typescript-eslint/max-lines-per-function': 'off',
        'max-lines-per-function': 'off',
        'max-params': 'off',
      },
    },
  ],
};