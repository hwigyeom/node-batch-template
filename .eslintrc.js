module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:typescript-sort-keys/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ],
      files: [
        '**/*.{ts,tsx}'
      ],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/await-thenable': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-misused-promises': 'off'
      }
    },
    {
      files: '*.json',
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': 'error'
      },
      extends: [
        'plugin:jsonc/recommended-with-json'
      ]
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: [
      './tsconfig.json',
      './test/tsconfig.json'
    ],
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
    'simple-import-sort',
    'typescript-sort-keys'
  ],
  root: true,
  rules: {
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error'
  },
  env: {
    node: true,
    jest: true
  }
};
