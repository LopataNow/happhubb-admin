module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'no-console': 'off',
    'no-unused-vars': ['error', { vars: 'all', args: 'none', ignoreRestSiblings: false }],
    'linebreak-style': ['error', 'unix'],
    'no-return-await': 'off',
    'global-require': 'off',
    'import/no-dynamic-require': 'off',
    'implicit-arrow-linebreak': 'off',
  },
}
