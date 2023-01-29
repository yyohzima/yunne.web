module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  plugins: ['import', 'unused-imports'],
  extends: [
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'prettier',
  ],
  settings: {
    'import/resolver': {
      typescript: {
        project: '.',
        alwaysTryTypes: true,
      },
      node: {
        project: ['tsconfig.json'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended'],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {},
    },
  ],
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
        pathGroups: [
          {
            pattern: '@/**',
            group: 'parent',
            position: 'before',
          },
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
