module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  plugins: ['unused-imports'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/extensions': ['.js', '.jsx', '.tsx', '.ts'],
    'import/resolver': {
      typescript: {
        project: '.',
      },
      node: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'eol-last': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'arrow-parens': [2, 'always', { requireForBlockBody: true }],
    quotes: ['error', 'single', { avoidEscape: true }],
    'jsx-quotes': ['error', 'prefer-single'],
    indent: ['error', 2],

    // @typescript-eslint
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/typedef': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',

    // import
    'import/no-unresolved': 'error',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          // TODO
          'builtin',
          'external',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
      },
    ],

    // unused-imports
    'unused-imports/no-unused-imports': 'error',

    // react
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
  },
}
